import { app } from './config';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db } from './config';
import { doc, updateDoc } from 'firebase/firestore';

// Initialize callable functions
const functions = getFunctions(app);

// Generic caller for any Firebase callable function
export const callFunction = async <T = any, R = any>(
  functionName: string,
  data?: T
): Promise<R> => {
  const callable = httpsCallable<T, R>(functions, functionName);
  const result = await callable(data);
  return result.data;
};

// Update user profile in Firestore
export const updateUserProfile = async (
  userId: string,
  data: { [key: string]: any }
) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, data);
};