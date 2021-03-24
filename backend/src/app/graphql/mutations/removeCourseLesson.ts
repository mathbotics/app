import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import{CreateCourseLessonPayload} from '../payloads/CreateCourseLessonPayload';
import { resolve } from 'path';
import { Lesson } from '../../server/objects';


export const removeCourseLessonInput = new GraphQLInputObjectType({
    name: "createCourseLessonInput",
    fields: () => ({
        courseId: { type: GraphQLString},
        lessonId: { type: GraphQLString}
    })
});

export const removeCourseLesson = {
    type: new GraphQLNonNull(Lesson),
    args: {
      input: {
        type: new GraphQLNonNull(removeCourseLessonInput),
      }
    },
   async resolve(root, args){
     const { courseId, lessonId} = args.input 
    const  courseToLesson  = nullthrows(
      await prisma.courseToLesson.delete({
        where: {
            courseId_lessonId: {
                courseId: courseId,
                lessonId: lessonId
            }
        }
      }),
      'Could not remove course lesson',
      
    );

    const lesson = nullthrows(
      await prisma.courseToLesson.findUnique({
        where: {
            courseId_lessonId: {
                courseId: courseId,
                lessonId: lessonId
            }
        }
      }),
      'Could not remove course lesson',
    )

    return {lesson};
   }
  
}

