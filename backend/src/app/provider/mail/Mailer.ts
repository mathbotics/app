import nodemailer from 'nodemailer';

const { MAIL_HOST, MAIL_PORT } = process.env;

export type Message = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendMail(message: Message) {
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST ?? 'mailhog.docker.mathbotics.me',
    port: Number(MAIL_PORT ?? 1025),
    secure: false,
  });

  await transporter.sendMail(message);
}
