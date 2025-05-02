"use client";

import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { register as firebaseRegister, login as firebaseLogin, logout as firebaseLogout } from '../firebase/auth';
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

  const register = async (email: string, password: string) => {
    return await firebaseRegister(email, password);
  };

  const login = async (email: string, password: string) => {
    return await firebaseLogin(email, password);
  };

  const logout = async () => {
    return await firebaseLogout();
  };

  return { user, register, login, logout };
}