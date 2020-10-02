import { mutationField, inputObjectType, arg } from 'nexus';

import prisma from '../../data/prisma';

export const deleteStudent = mutationField('deleteStudent',{
    type: 'Student',
    
    async resolve(
        _root,{input: {username}}
    ) {
        await prisma.student.deleteMany({
          where: {user: username} 
        })
    }
});