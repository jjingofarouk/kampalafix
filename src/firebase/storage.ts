import { db } from './config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addDocument = async (collectionName: string, data: any) => {
  return await addDoc(collection(db, collectionName), data);
};

export const getDocuments = async (collectionName: string) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};