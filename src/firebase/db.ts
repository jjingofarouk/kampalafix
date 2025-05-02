import { db } from './config';
import { collection, addDoc, getDocs, DocumentData } from 'firebase/firestore';
import { Booking } from '../types/booking';

export const addDocument = async (collectionName: string, data: DocumentData) => {
  return await addDoc(collection(db, collectionName), data);
};

export const getDocuments = async (collectionName: string): Promise<Booking[]> => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as Booking));
};