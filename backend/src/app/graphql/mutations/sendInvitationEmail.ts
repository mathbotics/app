import { promises as fs } from 'fs';
import * as path from 'path';
import mjml from 'mjml';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import jwt from 'jsonwebtoken';
import Handlebars from 'handlebars';

import { sendMail } from '../../provider/mail/Mailer';

const { JWT_SECRET } = process.env;

export const SendInvitationEmailInput = inputObjectType({
  name: 'SendInvitationEmailInput',
  definition(t) {
    t.string('email', {
      required: true,
    });
    t.string('role', {
      required: true,
    });
  },
});

export const sendInvitationEmail = mutationField('sendInvitationEmail', {
  type: 'String',
  args: {
    input: arg({ type: 'SendInvitationEmailInput', required: true }),
  },
  async resolve(_root, { input: { email, role } }) {
    try {
      const { html } = mjml(
        (
          await fs.readFile(
            path.join(
              __dirname,
              '../../provider/mail/templates/Invitation.mjml',
            ),
          )
        ).toString('utf8'),
      );
      const template = Handlebars.compile(html);

      const url = `http://localhost:3000/register/${jwt.sign(
        { email, role },
        nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined'),
      )}`;
      const message = {
        from: '"Mathbotics learning platform 🤖" <hello@mathbotics.io>',
        to: email,
        subject:
          'You have been invited to join the Mathbotics learning platform 🤖',
        text: 'Mathbotics invitation',
        html: template({ url }),
      };

      await sendMail(message);
      return url;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  },
});
