import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const DeleteCourseInput = inputObjectType({
  name: 'DeleteCourseInput',
  definition(t) {
    t.string('courseId', {
      required: true,
    });
  },
});
export const deleteCourse = mutationField('deleteCourse', {
  type: 'Course',
  args: {
    input: arg({ type: 'DeleteCourseInput', required: true }),
  },
  async resolve(_root, { input: { courseId } }) {
    const { ...course } = nullthrows(
      await prisma.course.delete({
        where: {
          id: courseId,
        },
      }),
      'Could not delete course',
    );
    return { ...course };
  },
});
