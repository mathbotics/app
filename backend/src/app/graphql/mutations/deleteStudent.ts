import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import { resolve } from 'path';

import prisma from '../../data/prisma';
import { DeleteStudentPayload } from '../payloads/DeleteStudentPayload';

export const DeleteStudentInput = new GraphQLInputObjectType({
  name: "DeleteStudentInput",
  fields: () => ({
    studentId: { type: GraphQLString },
    courseId: { type: GraphQLString }
  })
})


export const deleteSingleStudent = {
  type: DeleteStudentPayload,
  args: {
    input: {
      type: new GraphQLNonNull(DeleteStudentInput),
    }
  },
  async resolve(root, args){
    const { studentId, courseId } = args.input
    const coursetostudent = nullthrows(
      await prisma.courseToStudent.delete({
        where: {
          courseId_studentId: {
            studentId: studentId,
            courseId: courseId
          }
        },
        include: { student: true}
      }),
      'Could not delete student from Course to Student relation',
    );

    const student = nullthrows(
      await prisma.student.delete({
        where: {
          id: coursetostudent.student.id
        }
      }), 
      "Could not delete student from Student table",
    )

    const user = nullthrows(
      await prisma.user.delete({
        where: {
          id: student.userId
        }
      }),
      "Could not delete student from User table"
    )
    console.log("successfully deleted student from coursetostudent, student and user table", student)
    return {"student" : {...student}}
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
// export const deleteStudent = mutationField('deleteStudent', {
//   type: 'Student',
//   args: {
//     input: arg({ type: 'DeleteStudentInput', required: true }),
//   },
//   async resolve(_root, { input: { courseId } }) {
//     const { count } = await prisma.student.deleteMany({
//       where: {
//         courses: {
//           every: { id: courseId },
//         },
//       },
//     });
//   },
// });
