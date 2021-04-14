import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Course } from '../../server/objects/courses';

export const DeleteCourseInput = new GraphQLInputObjectType({
  name: "DeleteCourseInput",
  fields: () => ({
    courseId: { type: GraphQLString},
  })
});

export const deleteCourse = {
  type: new GraphQLNonNull(Course),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteCourseInput),
    }
  },
  async resolve(root:any, args:any){
    const {courseId } = args.input
    nullthrows(
      await prisma.courseToLesson.deleteMany({
        where: {
          courseId: courseId,
          },
        }),
        'Could not delete lessons from course',
    ); 

    nullthrows(
      await prisma.courseToStudent.deleteMany({
        where: {
          courseId: courseId,
          },
        }),
        'Could not delete students from course',
    ); 

    nullthrows(
      await prisma.grade.deleteMany({
        where: {
          courseId: courseId,
          },
        }),
        'Could not delete students from course',
    ); 

    const course = nullthrows(
      await prisma.course.delete({
        where: {
          id: courseId
        },
        include: { 
          instructor: true,
          courseTo: {
            include: {
              student: {
              include: {
                user: true
              }
              }
            }
          },
          contents: true,
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
      "Could not delete course",
    )
    return course
  }
}
