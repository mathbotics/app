import { AuthenticationError } from 'apollo-server-express';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserHelper from '../objects/helpers/UserHelper';
import { Context } from '../context';

const { JWT_SECRET } = process.env;

export const RegisterUserInput = inputObjectType({
  name: 'RegisterUserInput',
  definition(t) {
    t.string('username', {
      required: true,
    });
    t.string('token', {
      required: true,
    });
    t.string('password', {
      required: true,
    });
    t.string('firstName', {
      required: true,
    });
    t.string('lastName', {
      required: true,
    });
  },
});

export const registerUser = mutationField('registerUser', {
  type: 'User',
  args: {
    input: arg({ type: 'RegisterUserInput', required: true }),
  },
  async resolve(
    _root,
    { input: { username, password, token, firstName, lastName } },
    ctx,
  ) {
    const { email, role } = jwt.verify(
      token,
      nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
    ) as { email?: string; role: NexusGen['abstractResolveReturn']['User'] };
    try {
      switch (role) {
        case 'Instructor':
          const { user, ...instructor } = nullthrows(
            await (ctx as Context).prisma.instructor.create({
              data: {
                user: { create: { username, password, firstName, lastName } },
                email: nullthrows(email, 'email is null or endefined'),
              },
              include: { user: true },
            }),
            'Could not create instructor',
          );
          return { ...user, ...instructor };
        default:
          throw new Error('Unimplemented');
      }
    } catch (e) {
      console.warn(e);
      throw e;
    }
  },
});
