import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { DeleteLessonPayload } from '../payloads/DeleteLessonPayload';

export const DeleteLessonInput = new GraphQLInputObjectType({
  name: "DeleteLessonInput",
  fields: () => ({
    id: { type: GraphQLString},
  })
});

export const deleteLesson = {
    type: DeleteLessonPayload,
    args: {
      input: {
        type: new GraphQLNonNull(DeleteLessonInput),
      }
    },
   async resolve(root, args){
    const {id} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.delete({
        where: {
          id: id,
        },
      })
      , 'Could not delete lesson',);
    return { lesson };
   }
}
