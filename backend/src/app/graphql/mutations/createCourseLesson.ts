import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import{CreateCourseLessonPayload} from '../payloads/CreateCourseLessonPayload';
import { resolve } from 'path';


export const createCourseLessonInput = new GraphQLInputObjectType({
    name: "createCourseLessonInput",
    fields: () => ({
        courseId: { type: GraphQLString},
        lessonId: { type: GraphQLString}
    })
});

export const createCourseLesson = {
    type: CreateCourseLessonPayload,
    args: {
      input: {
        type: new GraphQLNonNull(createCourseLessonInput),
      }
    },
   async resolve(root, args){
     const { courseId, lessonId} = args.input 
    const  courseToLesson  = nullthrows(
      await prisma.courseToLesson.create({
        data: {
            courseId,
            lessonId
        }
      }),
      'Could not create course',
    );

    const course = nullthrows(
      await prisma.course.findUnique({
        where: {
          id: courseId
        }
      }),
      'Could not create course',
    )

    const lesson = nullthrows(
      await prisma.lesson.findUnique({
        where: {
          id: lessonId
        }
      }),
      'Could not create course',
    )

    return {course, lesson};
   }
  
}

