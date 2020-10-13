import { AuthenticationError } from 'apollo-server-express';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import { compare } from 'bcrypt';

import prisma from '../../data/prisma';

export const LogInInput = inputObjectType({
  name: 'LogInInput',
  definition(t) {
    t.string('username', {
      required: true,
    });
    t.string('password', {
      required: true,
    });
  },
});

export const logIn = mutationField('logIn', {
  type: 'User',
  args: {
    input: arg({ type: 'LogInInput', required: true }),
  },
  async resolve(_root, { input: { username, password } }) {
    try {
      const user = nullthrows(
        await prisma.user.findOne({
          where: { username },
          include: {
            admin: true,
            guardian: true,
            instructor: true,
            student: true,
          },
        }),
        'User not found',
      );
      const matched = await compare(password, user.password);
      if (!matched) {
        throw new AuthenticationError('Incorrect password.');
      }
      const { admin, guardian, instructor, student } = user;
      return nullthrows(
        admin ?? guardian ?? instructor ?? student,
        'User relationship is null.',
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  },
});
