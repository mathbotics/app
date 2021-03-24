import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { CreateLessonPayload } from '../payloads/CreateLessonPayload';

export const CreateLessonInput = new GraphQLInputObjectType({
  name: "CreateLessonInput",
  fields: () => ({
    title: { type: GraphQLString},
    Time: { type: GraphQLString},
    difficultyLevel: { type: GraphQLString}
    //lessonPlanId: { type: GraphQLString},
  })
});

export const createOneLesson = {
    type: CreateLessonPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateLessonInput),
      }
    },
   async resolve(root, args){
    const {title,Time, difficultyLevel} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.create({
        data: {
            title,
            Time,
            difficultyLevel
            //lessonPlanId
        }
      }),
      'Could not create lesson',
    );
    return { lesson };
   }
  
}
