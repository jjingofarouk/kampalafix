"use client";

import { auth } from './config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../types/user';

export const register = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return { id: userCredential.user.uid, email: userCredential.user.email || '' };
};

export const login = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return { id: userCredential.user.uid, email: userCredential.user.email || '' };
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};