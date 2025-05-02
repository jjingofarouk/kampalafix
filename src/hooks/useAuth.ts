"use client";

import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ id: firebaseUser.uid, email: firebaseUser.email || '' });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const register = async (email: string, password: string): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { id: userCredential.user.uid, email: userCredential.user.email || '' };
  };

  const login = async (email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { id: userCredential.user.uid, email: userCredential.user.email || '' };
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  return { user, register, login, logout };
}