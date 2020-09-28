import { mutationField, inputObjectType, arg } from 'nexus';
import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';
import jwt from 'jsonwebtoken';

import { Context } from '../context';

const { JWT_SECRET } = process.env;

// This seems to be un-used not sure why
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
                user: {
                  create: {
                    username,
                    password: await bcrypt.hash(password, 10),
                    firstName,
                    lastName,
                  },
                },
                email: nullthrows(email, 'email is null or undefined'),
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
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  },
});
