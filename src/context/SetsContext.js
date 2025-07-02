import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const SetsContext = createContext(null);
const SETS_KEY = 'mvp_sets';

export const SetsProvider = ({ children }) => {
  const { user } = useAuth();
  const [sets, setSets] = useState(() => {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(SETS_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SETS_KEY, JSON.stringify(sets));
    }
  }, [sets]);

  const createSet = (data) => {
    const newSet = { ...data, id: Date.now(), owner: user.email, createdAt: Date.now() };
    setSets((s) => [...s, newSet]);
    return newSet.id;
  };

  const updateSet = (id, changes) => {
    setSets((s) => s.map((set) => (set.id === id ? { ...set, ...changes } : set)));
  };

  const removeSet = (id) => {
    setSets((s) => s.filter((set) => set.id !== id));
  };

  return (
    <SetsContext.Provider value={{ sets, createSet, updateSet, removeSet }}>
      {children}
    </SetsContext.Provider>
  );
};

export const useSets = () => useContext(SetsContext);
