import { queryField } from 'nexus';

import UserHelper from '../objects/helpers/UserHelper';

export const viewerQuery = queryField('viewer', {
  type: 'User',
  async resolve(_parent, _args, { viewer: { username } }: any) {
    return UserHelper.user(username);
  },
});
