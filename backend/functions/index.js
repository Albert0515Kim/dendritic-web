const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret);

admin.initializeApp();
const db = admin.firestore();

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  const { priceId, uid } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/subscribe-success`,
      cancel_url: `${req.headers.origin}/subscribe`,
      metadata: { uid },
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, functions.config().stripe.webhook);
  } catch (err) {
    console.error('Webhook Error', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const uid = session.metadata.uid;
    if (uid) {
      await db.collection('users').doc(uid).set({ isMember: true }, { merge: true });
    }
  }

  res.json({ received: true });
});
