import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const EditStudentInput = inputObjectType({
  name: 'EditStudentInput',
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
    t.string('studentId', {
      required: true,
    });
    t.field('gradeLevel', {
        type: 'GradeLevel',
        required: true,
      });
  },
});

export const editStudent = mutationField('editStudent', {
  type: 'Student',
  args: {
    input: arg({ type: 'EditStudentInput', required: true }),
  },
  async resolve(
    _root,
    { input: { username, firstName, lastName, studentId, gradeLevel } },
  ) {
    const { user, ...student } = (
        await prisma.student.update({
            where:{ id: studentId },
            data:{
                user:{
                    update:{
                        username,
                        firstName,
                        lastName,
                    }
                },
                gradeLevel,

            },
            include: {user: true}
            
        })
        
    );
    return { ...user, ...student}
    }
})