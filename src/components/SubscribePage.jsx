import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscribePage = () => {
  
  const monthlyUrl = 'https://buy.stripe.com/test_monthly';
  const yearlyUrl = 'https://buy.stripe.com/test_yearly';
  const navigate = useNavigate();

  const handleCheckout = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center py-16 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Choose Your Subscription</h1>
      <div className="space-y-4 w-full max-w-sm">
        <button
          className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
          onClick={() => handleCheckout(monthlyUrl)}
        >
          Monthly - $4.99
        </button>
        <button
          className="bg-[#00df9a] text-black rounded-md font-medium w-full px-6 py-3"
          onClick={() => handleCheckout(yearlyUrl)}
        >
          Annually - $39.99
        </button>
      </div>
    </div>
  );
};

export default SubscribePage;
