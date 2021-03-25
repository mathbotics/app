import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Lesson } from '../../server/objects/Lesson';

export const CreateLessonInput = new GraphQLInputObjectType({
  name: "CreateLessonInput",
  fields: () => ({
    title: { type: GraphQLString},
    time: { type: GraphQLString},
    difficultyLevel: { type: GraphQLString}
  })
});

export const createOneLesson = {
    type: new GraphQLNonNull(Lesson),
    args: {
      input: {
        type: new GraphQLNonNull(CreateLessonInput),
      }
    },
   async resolve(root:any, args:any){
    const {title, time, difficultyLevel} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.create({
        data: {
            title,
            time,
            difficultyLevel
        },
        include: {slides: true}
      }),
      'Could not create lesson',
    );
    return lesson;
   }
  
}
