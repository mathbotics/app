// // import { mutationField, inputObjectType, arg } from 'nexus';
// // import nullthrows from 'nullthrows';
// // import prisma from '../../data/prisma';

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
//  async resolve(root, args){
//    const {courseId} = args.input 
//   const courseToLesson = nullthrows(
//     await prisma.courseToLesson.deleteMany({
//       where: {
//         courseId: courseId,
//       },              
//     }),
//     'Could not delete course',
//   ); 
//   const course = nullthrows(
//     await prisma.course.delete({
//       where: {
//         id: courseId,
//       },              
//     }) 
//     "Could not delete student from Student table",
//   )
//   return {course};
//  }

// }

// // export const DeleteCourseInput = inputObjectType({
// //   name: 'DeleteCourseInput',
// //   definition(t) {
// //     t.string('courseId', {
// //       required: true,
// //     });
// //   },
// // });
// // export const deleteCourse = mutationField('deleteCourse', {
// //   type: 'Course',
// //   args: {
// //     input: arg({ type: 'DeleteCourseInput', required: true }),
// //   },
// //   async resolve(_root, { input: { courseId } }) {
// //     const { ...course } = nullthrows(
// //       await prisma.course.delete({
// //         where: {
// //           id: courseId,
// //         },
// //       }),
// //       'Could not delete course',
// //     );
// //     return { ...course };
// //   },
// // })
