import { objectType } from 'nexus';

export const TextBlock = objectType({
  name: 'TextBlock',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.body();
  },
});
