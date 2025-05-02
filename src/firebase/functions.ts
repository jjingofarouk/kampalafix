import { httpsCallable, getFunctions } from 'firebase/functions';

const functions = getFunctions();

export const callFunction = async (name: string, data: any) => {
  const callable = httpsCallable(functions, name);
  return await callable(data);
};