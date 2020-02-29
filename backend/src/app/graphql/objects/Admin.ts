import { objectType } from 'nexus';

export const Admin = objectType({
  name: 'Admin',
  definition(t) {
    t.implements('User');
    t.model.id();
    t.model.email();
  },
});
