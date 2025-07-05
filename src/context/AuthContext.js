import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        const ref = doc(db, 'users', fbUser.uid);
        const snap = await getDoc(ref);
        const data = snap.exists() ? snap.data() : { isMember: false };
        setUser({ uid: fbUser.uid, email: fbUser.email, isMember: data.isMember });
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const signup = async (email, password) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', cred.user.uid), { isMember: false });
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const ref = doc(db, 'users', cred.user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, { isMember: false });
    }
  };

  const logout = () => signOut(auth);

  const updateMembership = async () => {
    if (user) {
      await setDoc(doc(db, 'users', user.uid), { isMember: true }, { merge: true });
      setUser({ ...user, isMember: true });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, loginWithGoogle, logout, updateMembership }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
