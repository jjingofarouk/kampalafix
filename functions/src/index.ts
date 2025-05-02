import * as functions from 'firebase-functions';
import { handleWebhook } from '../../src/lib/stripe/webhook';

export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  await handleWebhook(req.body);
  res.sendStatus(200);
});