import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import { GradeLevel } from '../../server/GraphQLSchema';
import prisma from '../../data/prisma';
import { EditStudentPayload } from '../payloads/EditStudentPayload';
import { resolve } from 'path';


export const EditStudentInput = new GraphQLInputObjectType({
  name: "EditStudentInput",
  fields: () => ({
    username: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    studentId: { type: GraphQLString },
    gradeLevel: { type: GradeLevel}
  })
})

export const editStudent = {
  type: EditStudentPayload,
  args: {
    input: {
      type: new GraphQLNonNull(EditStudentInput),
    }
  },
  async resolve(root, args) {
    const { username, firstName, lastName, studentId, gradeLevel } = args.input;
    const student = nullthrows(
      await prisma.student.update({
        where: {
          id: studentId,
        },
        data: {
          user: {
            update: {
              username,
              firstName,
              lastName,
            }
          },
          gradeLevel,
        },
        include: {
          user: true,
        }
      }),
      "Student could not be updated"
    );
    
    return {student: student}
  }
}