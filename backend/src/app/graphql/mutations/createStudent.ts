import { mutationField, inputObjectType, arg } from 'nexus';
import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const CreateStudentInput = inputObjectType({
  name: 'CreateStudentInput',
  definition(t) {
    t.string('username', {
      required: true,
    });
    t.string('firstName', {
      required: true,
    });
    t.string('lastName', {
      required: true,
    });
    t.field('gradeLevel', {
      type: 'GradeLevel',
      required: true,
    });
    t.string('courseId', {
      required: true,
    });
  },
});

export const createStudent = mutationField('createStudent', {
  type: 'Student',
  args: {
    input: arg({ type: 'CreateStudentInput', required: true }),
  },
  async resolve(
    _root,
    { input: { username, firstName, courseId, lastName, gradeLevel } },
  ) {
    const { user, ...student } = nullthrows(
      await prisma.student.create({
        data: {
          user: {
            create: {
              username,
              password: await bcrypt.hash(
                `${firstName.charAt(0)}${lastName}`,
                10,
              ),
              firstName,
              lastName,
            },
          },
          gradeLevel,
          courses: {
            connect: { id: courseId },
          },
        },
        include: { user: true },
      }),
      'Could not create instructor',
    );
    return { ...user, ...student };
  },
});
