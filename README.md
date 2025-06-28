# Dendritic Web

A simple flashcard application with optional premium membership. Users can create and study sets of flashcards. Premium access is purchased through a Stripe subscription handled by Firebase Cloud Functions.

## Quick Start

1. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```
2. Copy `frontend/.env.example` to `frontend/.env` and fill in your keys.
3. Start the development server
   ```bash
   npm start
   ```
4. Install backend dependencies
   ```bash
   cd ../backend/functions
   npm install
   ```

## Environment Variables

The application expects the following variables at build time in `frontend/.env`:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_STRIPE_MONTHLY_PRICE_ID`
- `REACT_APP_STRIPE_YEARLY_PRICE_ID`

Firebase Functions require the Stripe secret and webhook values to be set using `firebase functions:config:set`:

```bash
firebase functions:config:set stripe.secret="YOUR_SECRET_KEY" stripe.webhook="YOUR_WEBHOOK_SECRET"
```

## Firebase Functions

The `backend/functions` directory contains two HTTPS functions:

- `createCheckoutSession` – creates a Stripe Checkout session for subscriptions.
- `stripeWebhook` – handles webhook events to mark a user as a member in Firestore.

Deploy them from the `backend` directory with:

```bash
firebase deploy --only functions
```

## Hosting

After building the React app, deploy using Firebase Hosting or your preferred service.
