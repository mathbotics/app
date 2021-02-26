import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UpdateLessonPayload } from '../payloads/UpdateLessonPayload';

export const UpdateLessonInput = new GraphQLInputObjectType({
  name: "UpdateLessonInput",
  fields: () => ({
    id: { type: GraphQLString},
    title: { type: GraphQLString},
    lessonPlanId: { type: GraphQLString}
  })
});

export const updateLessonMutation = {
    type: UpdateLessonPayload,
    args: {
      input: {
        type: new GraphQLNonNull(UpdateLessonInput),
      }
    },
   async resolve(root, args){
    const {id, title, lessonPlanId} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.update({
        where: {
          id: id
        },
        data: {
          title: title,
          lessonPlanId: lessonPlanId
        },
      }),
      'Could not update lesson',
    );
    return { lesson };
   }
  
}