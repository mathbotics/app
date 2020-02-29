import { objectType } from 'nexus';

export const Instructor = objectType({
  name: 'Instructor',
  definition(t) {
    t.implements('User');
    t.model.id();
    t.model.email();
    t.model.courses();
  },
});
