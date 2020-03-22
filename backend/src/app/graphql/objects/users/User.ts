import { interfaceType } from 'nexus';

import UserHelper from './helpers/UserHelper';

export const User = interfaceType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('username', {
      async resolve({ id }) {
        const { username } = await UserHelper.user(id);
        return username;
      },
    });
    t.string('firstName', {
      async resolve({ id }) {
        const { firstName } = await UserHelper.user(id);
        return firstName;
      },
    });
    t.string('lastName', {
      async resolve({ id }) {
        const { lastName } = await UserHelper.user(id);
        return lastName;
      },
    });
    t.resolveType(({ id }) => UserHelper.role(id));
  },
});
