import nodemailer from 'nodemailer';

export type Message = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendMail(message: Message) {
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
  });

  await transporter.sendMail(message);
}
