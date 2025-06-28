import React from 'react';
import { useAuth } from '../context/AuthContext';

const SubscribePage = () => {
  const monthlyPriceId = process.env.REACT_APP_STRIPE_MONTHLY_PRICE_ID;
  const yearlyPriceId = process.env.REACT_APP_STRIPE_YEARLY_PRICE_ID;
  const { user } = useAuth();

  const handleCheckout = async (priceId) => {
    try {
      const response = await fetch('/createCheckoutSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, uid: user?.uid }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error', err);
    }
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
        <button
          className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
          onClick={() => handleCheckout(yearlyPriceId)}
        >
          Annually - $39.99
        </button>
      </div>
    </div>
  );
};

export default SubscribePage;
