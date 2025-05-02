import { db } from './config';
import { collection, addDoc, getDocs, DocumentData } from 'firebase/firestore';

export const addDocument = async (collectionName: string, data: DocumentData) => {
  return await addDoc(collection(db, collectionName), data);
};

export const getDocuments = async <T>(collectionName: string): Promise<T[]> => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as T));
};