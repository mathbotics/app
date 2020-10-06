import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const DeleteStudentInput = inputObjectType({
    name: 'DeleteStudentInput',
    definition(t) {
      t.string('username', {
        required: true,
      });
    },
  });
export const deleteStudent = mutationField('deleteStudent',{
    type: 'Student',
    args: {
        input: arg({ type: 'DeleteStudentInput', required: true }),
      },
    async resolve(
        _root,{input: {username}},
    ) {
       const { count} = nullthrows(
         await prisma.student.deleteMany({
          where: {user: 
            {username}
          } 
        }),
        'Could not create instructor',
      );
    }
});