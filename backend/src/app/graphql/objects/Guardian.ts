import { objectType } from 'nexus';

export const Guardian = objectType({
  name: 'Guardian',
  definition(t) {
    t.implements('User');
    t.model.id();
    t.model.email();
    t.model.students();
  },
});
