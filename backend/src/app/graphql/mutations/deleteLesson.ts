import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { DeleteLessonPayload } from '../payloads/DeleteLessonPayload';

export const DeleteLessonInput = new GraphQLInputObjectType({
  name: "DeleteLessonInput",
  fields: () => ({
    lessonId: { type: GraphQLString},
  })
});

//TODO: lesson doesnt delete slides and blocks made. delete unnecessary data that was once linked to it
export const deleteLesson = { 
    type: DeleteLessonPayload,
    args: {
      input: {
        type: new GraphQLNonNull(DeleteLessonInput),
      }
    },
   async resolve(root, args){
    const {lessonId} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.delete({
        where: {
          id: lessonId,
        },
      })
      , 'Could not delete lesson',);
    return { lesson };
   }
}
