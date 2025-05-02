import { callFunction } from '../../firebase/functions';

export const createCheckoutSession = async (items: any[]) => {
  return await callFunction('createCheckoutSession', { items });
};