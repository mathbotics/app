import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../data/prisma';
import { Context } from '../context';

const { JWT_SECRET } = process.env;

export const ResetPasswordInput = inputObjectType({
  name: 'ResetPasswordInput',
  definition(t) {
    t.string('password', {
      required: true,
    });
    t.string('token', {
        required: true,
      });
  },
});

export const resetPassword = mutationField('resetPassword', {
  type: 'User',
  args: {
    input: arg({ type: 'ResetPasswordInput', required: true }),
  },
  async resolve(_root, { input: { password, token } }, ctx) {
    const { email } = jwt.verify(
      token,
      nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
    ) as { email?: string; };
    try {
          const { user, ...instructor } = nullthrows(
            await (ctx as Context).prisma.instructor.update({
              where: { email },
              data: {
                user: {
                  update: {
                    password: await bcrypt.hash(password, 10),
                  },
                },
                email: nullthrows(email, 'email is null or undefined'),
              },
              include: { user: true },
            }),
            'Could not create instructor',
          );
          return { ...user, ...instructor };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  },
});
