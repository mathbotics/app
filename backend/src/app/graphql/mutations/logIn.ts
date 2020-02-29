import { AuthenticationError } from 'apollo-server-express';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import bcrypt from 'bcrypt';

import UserHelper from '../objects/helpers/UserHelper';

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
      const {
        admin,
        guardian,
        instructor,
        student,
        ...user
      } = await UserHelper.user(username);
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        throw new AuthenticationError('Incorrect password.');
      }
      return {
        ...user,
        ...nullthrows(admin ?? guardian ?? instructor ?? student),
      };
    } catch (e) {
      console.warn(e);
      throw e;
    }
  },
});
