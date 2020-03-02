import { objectType } from 'nexus';

export const Content = objectType({
  name: 'Content',
  definition(t) {
    t.model.id();
    t.model.author();
    t.model.title();
    t.model.course();
  },
});
