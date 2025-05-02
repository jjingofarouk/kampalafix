import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

export const sendEmail = functions.https.onCall(async (data) => {
  await transporter.sendMail({
    from: 'KampalaFix <support@kampalafix.com>',
    to: data.to,
    subject: data.subject,
    text: data.text,
  });
});