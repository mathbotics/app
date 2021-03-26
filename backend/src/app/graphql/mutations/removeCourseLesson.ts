import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import{CreateCourseLessonPayload} from '../payloads/CreateCourseLessonPayload';
import { resolve } from 'path';
import { Lesson } from '../../server/objects';
import { Course } from '../../server/objects/courses';


export const removeCourseLessonInput = new GraphQLInputObjectType({
    name: "removeCourseLessonInput",
    fields: () => ({
        courseId: { type: GraphQLString},
        lessonId: { type: GraphQLString}
    })
});

export const removeCourseLesson = {
    type: new GraphQLNonNull(Course),
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

    const course = nullthrows(
      await prisma.course.findUnique({
        where: {
          id: courseId
        },
        include: {
          courses: {
            include: {
              lesson: {
                include: {
                  slides: true
                }
              }
            }
        }
      }
      }),
      'Could not create course',
    )
    
    const lesson = nullthrows(
      await prisma.lesson.findUnique({
        where: {
                id: lessonId
            }
        }
      ),
      'Could not remove course lesson',
    )

    return course;
    }
  
}

