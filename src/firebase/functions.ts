import { db } from './config';
import { doc, updateDoc } from 'firebase/firestore';

export const updateUserProfile = async (userId: string, data: { [key: string]: any }) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, data);
};