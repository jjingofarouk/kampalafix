import { stripe } from './config';

export const handleWebhook = async (event: any) => {
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Handle success
      break;
    case 'payment_intent.payment_failed':
      // Handle failure
      break;
  }
};