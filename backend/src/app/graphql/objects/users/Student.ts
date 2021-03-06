import { objectType } from 'nexus';

export const Student = objectType({
  name: 'Student',
  definition(t) {
    t.implements('User');
    t.model.id();
    t.model.email();
    t.model.gradeLevel();
    t.model.guardians();
    t.model.courses();
  },
});
