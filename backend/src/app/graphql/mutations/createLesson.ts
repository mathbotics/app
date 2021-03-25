import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Lesson } from '../../server/objects/Lesson';

export const CreateLessonInput = new GraphQLInputObjectType({
  name: "CreateLessonInput",
  fields: () => ({
    title: { type: GraphQLString}
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
    const {title} = args.input 

    const lesson = nullthrows(
      await prisma.lesson.create({
        data: {
            title
        },
        include: {slides: true}
      }),
      'Could not create lesson',
    );
    return lesson;
   }
  
}
