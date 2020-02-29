import { objectType } from 'nexus';

export const Couse = objectType({
  name: 'Course',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.suggestedLevel();
    t.model.instructors();
    t.model.students();
  },
});
