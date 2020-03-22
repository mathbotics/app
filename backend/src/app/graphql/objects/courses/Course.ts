import { objectType } from 'nexus';

export const Course = objectType({
  name: 'Course',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.suggestedLevel();
    t.model.instructors();
    // @ts-ignore
    t.model.lessonPlan();
  },
});
