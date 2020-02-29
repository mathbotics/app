import { queryField } from 'nexus';
import nullthrows from 'nullthrows';

import UserHelper from '../objects/helpers/UserHelper';

export const viewerQuery = queryField('viewer', {
  type: 'User',
  async resolve(_parent, _args, { viewer: { username } }: any) {
    const {
      admin,
      guardian,
      instructor,
      student,
      ...user
    } = await UserHelper.user(username);
    return {
      ...user,
      ...nullthrows(admin ?? guardian ?? instructor ?? student),
    };
  },
});
