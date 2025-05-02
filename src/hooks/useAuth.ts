"use client";

import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { register, login, logout } from '../firebase/auth';
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

  return { user, register, login, logout };
}