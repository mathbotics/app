import { promises as fs } from 'fs';
import * as path from 'path';
import mjml from 'mjml';
import { sendMail } from '../../app/provider/mail/Mailer';

test('nodemailer works', async () => {
  const data: Buffer = await fs.readFile(
    path.join(__dirname, '../../app/provider/mail/templates/Invitation.mjml'),
  );

  const { html } = mjml(data.toString('utf8'));

  const message = {
    from: '"Mathbotics learning platform 🤖" <hello@mathbotics.io>',
    to: 'invitee@gmail.com',
    subject:
      'You have been invited to join the Mathbotics learning platform 🤖',
    text: 'Mathbotics invitation',
    html,
  };
  await sendMail(message);
});
