import { promises as fs } from 'fs';
import * as path from 'path';
import mjml from 'mjml';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import jwt from 'jsonwebtoken';
import Handlebars from 'handlebars';

import { sendMail } from '../../provider/mail/Mailer';

const { JWT_SECRET } = process.env;

export const SendResetPasswordEmailInput = inputObjectType({
  name: 'SendResetPasswordEmailInput',
  definition(t) {
    t.string('email', {
      required: true,
    });
    // t.string('role', {
    //   required: true,
    // });
  },
});

export const sendResetPasswordEmail = mutationField('sendResetPasswordEmail', {
  type: 'String',
  args: {
    input: arg({ type: 'SendResetPasswordEmailInput', required: true }),
  },
  async resolve(_root, { input: { email, role } }) {
    try {
      const { html } = mjml(
        (
          await fs.readFile(
            path.join(
              __dirname,
              '../../provider/mail/templates/ResetPassword.mjml',
            ),
          )
        ).toString('utf8'),
      );
      const template = Handlebars.compile(html);
        // { email, role },
      const url = `http://localhost:3000/register/${jwt.sign(
        { email },
        nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined'),
      )}`;
      const message = {
        from: '"Mathbotics learning platform 🤖" <hello@mathbotics.io>',
        to: email,
        subject:
          'You have requested to reset your password 🤖',
        text: 'Mathbotics password reset',
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
