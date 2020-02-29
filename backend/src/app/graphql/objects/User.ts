import { interfaceType } from 'nexus';
import nullthrows from 'nullthrows';

import UserHelper from './helpers/UserHelper';

export const User = interfaceType({
  name: 'User',
  definition(t) {
    t.model.firstName();
    t.model.lastName();
    t.model.username();
    t.resolveType(async ({ username }) =>
      nullthrows(await UserHelper.role(username)),
    );
  },
});
