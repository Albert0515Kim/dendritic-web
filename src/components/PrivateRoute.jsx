import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace('/auth');
    }
  }, [user, router]);

  if (!user) return null;
  return <>{children}</>;
};

export default PrivateRoute;
