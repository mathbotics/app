import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const DeleteSingleStudentInput = inputObjectType({
  name: 'DeleteSingleStudentInput',
  definition(t) {
    t.string('studentId', {
      required: true,
    });

  },
});

export const deleteSingleStudent = mutationField('deleteSingleStudent', {
  type: 'Student',
  args: {
    input: arg({ type: 'DeleteSingleStudentInput', required: true }),
  },
  async resolve(
    _root,
    { input: { studentId } },
  ) {
    const { user, ...student } = nullthrows(
      await prisma.student.delete({
        where:{
            id: studentId
        },
        include: { user: true },
      }),
      'Could not delete student',
    );
    return { ...user, ...student };
  },
});
