import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { Course } from '../../server/objects/courses';

export const createCourseLessonInput = new GraphQLInputObjectType({
    name: "createCourseLessonInput",
    fields: () => ({
        courseId: { type: GraphQLString},
        lessonId: { type: GraphQLString}
    })
});

export const createCourseLesson = {
    type: new GraphQLNonNull(Course),
    args: {
      input: {
        type: new GraphQLNonNull(createCourseLessonInput),
      }
    },
   async resolve(root:any, args:any){
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
      }),
      'Could not create course',
    )

    return course;
   }
  
}

