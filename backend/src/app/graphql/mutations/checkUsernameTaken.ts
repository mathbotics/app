import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const TakenUserInput = inputObjectType({
    name: 'TakenUserInput',
    definition(t) {
      t.string('username', {
        required: true,
      });
    },
  });
export const checkUsernameTaken = mutationField('checkUsernameTaken',{
    type: 'User',
    args: {
        input: arg({ type: 'TakenUserInput', required: true}),
      },
    async resolve(
        _root,{input: {username}},
    ) {
         const user = await prisma.user.findOne({
             select : {
                id:true,
             },
            where :{
                username: username,
            }
          });
          return user;
      } 
});