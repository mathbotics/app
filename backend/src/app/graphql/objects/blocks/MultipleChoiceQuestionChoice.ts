import { objectType } from 'nexus';
import prisma from '../../../data/prisma';

export const MultipleChoiceQuestionChoice = objectType({
  name: 'MultipleChoiceQuestionChoice',
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.correct();
    t.boolean('selected', {
      description:
        'Whether or not the student selected this choice in their answer. Null if the viewer is not a student.',
      nullable: true,
      async resolve({ id }, _args, { viewer }: any) {
        const student = prisma.student.findOne({ where: { id: viewer.id } });
        if (!student) {
          return null;
        }
        const [response] = await prisma.multipleChoiceQuestionResponse.findMany(
          {
            where: { choice: { id }, AND: { student: { id: viewer.id } } },
          },
        );
        return response != null;
      },
    });
  },
});
