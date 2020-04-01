import { objectType } from 'nexus';

export const EmptyBlock = objectType({
  name: 'EmptyBlock',
  definition(t) {
    t.string('id');
  },
});
