import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GradeLevel } from '../../server/GraphQLSchema';
import { CreateStudentPayload } from '../payloads/CreateStudentPayload';
import { resolve } from 'path';

export const CreateStudentInput = new GraphQLInputObjectType({
  name: "CreateStudentInput",
  fields: () => ({
    username: { type: GraphQLString},
    firstName: { type: GraphQLString},
    lastName: { type: GraphQLString},
    gradeLevel: { type: GradeLevel},
    email: {type: GraphQLString},
    courseId: { type: GraphQLString}
  })
});

export const createStudentMutation = {
    type: CreateStudentPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateStudentInput),
      }
    },
   async resolve(root, args){
     const { username, firstName, lastName, gradeLevel, courseId} = args.input 
    const student = nullthrows(
      await prisma.student.create({
        data: {
          user: {
            create: {
              username,
              password: await bcrypt.hash(
                `${firstName.charAt(0)}${lastName}`,
                10,
              ),
              firstName,
              lastName
            },
          },
          gradeLevel,
          // courses: {
          //   connect: { id: courseId },
          // },
        },
        include: { user: true, studentTo: true },
      }),
      'Could not create instructor',
    );
    await prisma.courseToStudent.create({
      data: {
        courseId: courseId,
        studentId: student.id,
        grade: .8
      }
    })
   
    return {student};
   }
  
}
// export const CreateStudentInput = inputObjectType({
//   name: 'CreateStudentInput',
//   definition(t) {
//     t.string('username', {
//       required: true,
//     });
//     t.string('firstName', {
//       required: true,
//     });
//     t.string('lastName', {
//       required: true,
//     });
//     t.field('gradeLevel', {
//       type: 'GradeLevel',
//       required: true,
//     });
//     t.string('courseId', {
//       required: true,
//     });
//   },
// });

// export const createStudent = mutationField('createStudent', {
//   type: 'Student',
//   args: {
//     input: arg({ type: 'CreateStudentInput', required: true }),
//   },
//   async resolve(
//     _root,
//     { input: { username, firstName, courseId, lastName, gradeLevel } },
//   ) {
//     const { user, ...student } = nullthrows(
//       await prisma.student.create({
//         data: {
//           user: {
//             create: {
//               username,
//               password: await bcrypt.hash(
//                 `${firstName.charAt(0)}${lastName}`,
//                 10,
//               ),
//               firstName,
//               lastName,
//             },
//           },
//           gradeLevel,
//           courses: {
//             connect: { id: courseId },
//           },
//         },
//         include: { user: true },
//       }),
//       'Could not create instructor',
//     );
//     return { ...user, ...student };
//   },
// });
