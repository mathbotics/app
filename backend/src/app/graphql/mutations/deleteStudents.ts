// import { mutationField, inputObjectType, arg } from 'nexus';
// import nullthrows from 'nullthrows';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { DeleteStudentsPayload } from '../payloads/DeleteStudentsPayload';
import nullthrows from 'nullthrows';
import { resolve } from 'path';

import prisma from '../../data/prisma';
import { Course } from '../../server/objects/courses';

export const DeleteStudentsInput = new GraphQLInputObjectType({
  name: "DeleteStudentsInput",
  fields: () => ({
    courseId: { type: GraphQLString }
  })
})

export const deleteStudents = {
  type: new GraphQLNonNull(Course),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteStudentsInput),
    }
  },
  async resolve(root, args){
    const { courseId } = args.input
    const course = nullthrows(
      await prisma.course.findMany({
        where: {
           id: courseId
        }
      }),
      'Could not delete student from Course to Student relation',
    );
    const deleteMany = nullthrows(
      await prisma.courseToStudent.deleteMany({
        where: {
            courseId: courseId
        }
      }),
      'Could not delete student from Course to Student relation',
    );
    console.log("this is the id",courseId)

    return course;
  }
}

