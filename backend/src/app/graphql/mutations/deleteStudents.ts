// import { mutationField, inputObjectType, arg } from 'nexus';
// import nullthrows from 'nullthrows';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { DeleteStudentsPayload } from '../payloads/DeleteStudentsPayload';
import nullthrows from 'nullthrows';
import { resolve } from 'path';

import prisma from '../../data/prisma';
import { Course } from '../../server/GraphQLSchema';

export const DeleteStudentsInput = new GraphQLInputObjectType({
  name: "DeleteStudentsInput",
  fields: () => ({
    courseId: { type: GraphQLString }
  })
})

export const deleteStudents = {
  type: DeleteStudentsPayload,
  args: {
    input: {
      type: new GraphQLNonNull(DeleteStudentsInput),
    }
  },
  async resolve(root, args){
    const { courseId } = args.input
    const deleteMany = nullthrows(
      await prisma.courseToStudent.deleteMany({
        where: {
            courseId: courseId
        }
      }),
      'Could not delete student from Course to Student relation',
    );
    console.log("this is the id",courseId)

    return {Course}
  }
}

// export const DeleteStudentInput = inputObjectType({
//   name: 'DeleteStudentInput',
//   definition(t) {
//     t.string('courseId', {
//       required: true,
//     });
//   },
// });
// // TODO to get this to actually return
// export const deleteStudents = mutationField('deleteStudents', {
//   type: 'Student',
//   args: {
//     input: arg({ type: 'DeleteStudentInput', required: true }),
//   },
//   async resolve(_root, { input: { courseId } }) {
//     try {
//       console.log('About to delete all students');
//       // get all students with user information
//       const studentsWithUser = await prisma.student.findMany({
//         where: {
//           courses: {
//             every: { id: courseId },
//           },
//         },
//         include: { user: true },
//       });

//       console.log(`Deleting ${studentsWithUser.length} students`);

//       // delete all students
//       const { count } = await prisma.student.deleteMany({
//         where: {
//           courses: {
//             every: { id: courseId },
//           },
//         },
//       });

//       console.log(`Succesfully deleted ${count} students`);

//       // delete all users
//       studentsWithUser.forEach(
//         async (student) =>
//           await prisma.user.delete({
//             where: {
//               id: student.user.id,
//             },
//           }),
//       );

//       console.log('Succesfully deleted all users');

//       const response = await prisma.student.findMany({
//         where: { courses: { every: { id: courseId } } },
//       });

//       return [];
//     } catch (e) {
//       console.log(`Something bad happened when deleting students ${e}`);
//       throw e;
//     }
//   },
// });
