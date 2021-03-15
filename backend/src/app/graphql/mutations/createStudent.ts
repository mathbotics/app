import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GradeLevel } from '../../server/objects/GradeLevel';
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

export const createStudent = {
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
        },
        include: { user: true, studentTo: true },
      }),
      'Could not create instructor',
    );
    await prisma.courseToStudent.create({
      data: {
        courseId: courseId,
        studentId: student.id,
        //grade: .8
      }
    })
   
    return {student};
   }
  
}