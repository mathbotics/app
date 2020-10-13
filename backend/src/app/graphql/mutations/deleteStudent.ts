import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';
import { Student } from '../objects';

export const DeleteStudentInput = inputObjectType({
    name: 'DeleteStudentInput',
    definition(t) {
      t.string('courseId', {
        required: true,
      });
    },
  });
export const deleteStudent = mutationField('deleteStudent',{
    type: 'Student',
    args: {
        input: arg({ type: 'DeleteStudentInput', required: true}),
      },
    async resolve(
        _root,{input: {courseId}},
    ) {
         const { count } = await prisma.student.deleteMany({
          where: {
            courses: {
              every: { id: courseId} },
            },
            include : {student: true}
          });
          return true;
      } 
});