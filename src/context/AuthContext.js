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
    users[email] = { email, password, isMember: false };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ email, isMember: false });
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
    if (!users[email] || users[email].password !== password) {
      throw new Error('Invalid credentials');
    }
    const { isMember = false } = users[email];
    setUser({ email, isMember });
  };

  const logout = () => setUser(null);

  const updateMembership = () => {
    setUser((u) => {
      if (!u) return u;
      const updated = { ...u, isMember: true };
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
      if (users[u.email]) {
        users[u.email].isMember = true;
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateMembership }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
