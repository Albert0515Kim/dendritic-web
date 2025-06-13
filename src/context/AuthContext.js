import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const USERS_KEY = 'mvp_users';
const CURRENT_KEY = 'mvp_current_user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_KEY);
    }
  }, [user]);

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
    if (users[email]) throw new Error('User already exists');
    users[email] = { email, password };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ email });
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
    if (!users[email] || users[email].password !== password) {
      throw new Error('Invalid credentials');
    }
    setUser({ email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
