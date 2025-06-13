import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const { signup, login } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        signup(email, password);
      } else {
        login(email, password);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4 text-center font-bold">{isSignup ? 'Sign Up' : 'Log In'}</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 w-full" type="submit">
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
        <p className="text-center mt-2 text-sm">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button type="button" className="text-blue-500" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
