import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const SubscribeSuccess = () => {
  const { updateMembership } = useAuth();

  useEffect(() => {
    // Mark the current user as a member
    updateMembership();
  }, [updateMembership]);

  return (
    <div className="flex flex-col items-center py-16 text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Thank you for subscribing!</h1>
      <p>Your membership is now active.</p>
    </div>
  );
};

export default SubscribeSuccess;
