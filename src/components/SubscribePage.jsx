import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { getCheckoutUrl } from '../context/StripePayment';
import app from '../firebase';


const SubscribePage = () => {
  const monthlyPriceId = process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID;
  const { user } = useAuth();
  const router = useRouter();

  const handleCheckout = async (priceId) => {
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Premium");
  };

  return (
    <div className="flex flex-col items-center py-16 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Choose Your Subscription</h1>
      <div className="space-y-4 w-full max-w-sm">
        <button
          className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
          onClick={() => handleCheckout(monthlyPriceId)}
        >
          Monthly - $4.99
        </button>

      </div>
    </div>
  );
};

export default SubscribePage;
