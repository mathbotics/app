import { extendType } from 'nexus';
import { Context } from '../context';

export * from './viewer';

export const query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.courses({
      filtering: true,
      computedInputs: {
        where({ ctx }) {
          const { id } = (ctx as Context).viewer;
          return {
            instructors: {
              some: {
                id,
              },
            },
            OR: {
              students: {
                some: {
                  id,
                },
              },
            },
            
          };
        },
      },
    });
    t.crud.admin();
    t.crud.lessons({ filtering: true });
    t.crud.lesson();
    t.crud.course();
    t.crud.students({ filtering: true });
    t.crud.student();
  },
});
