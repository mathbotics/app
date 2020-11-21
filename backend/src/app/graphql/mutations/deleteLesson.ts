import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const DeleteLessonInput = inputObjectType({
  name: 'DeleteLessonInput',
  definition(t) {
    t.string('lessonId', {
      required: true,
    });
  },
});
export const deleteLesson = mutationField('deleteLesson', {
  type: 'Lesson',
  args: {
    input: arg({ type: 'DeleteLessonInput', required: true }),
  },
  async resolve(_root, { input: { lessonId } }) {
    const { ...lesson } = nullthrows(
      await prisma.lesson.delete({
        where: {
          id: lessonId,
        },
      }),
      'Could not delete lesson',
    );
    return { ...lesson };
  },
});
