import { extendType } from 'nexus';

export * from './viewer';

export const query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.courses({ filtering: true });
    t.crud.lessons({ filtering: true });
    t.crud.lesson();
    t.crud.course();
  },
});
