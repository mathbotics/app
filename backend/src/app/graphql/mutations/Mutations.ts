import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { CreateStudentPayload } from "../payloads/CreateStudentPayload";
import { CreateStudentInput, createStudentMutation } from "./createStudent";
import prisma from '../../data/prisma';
import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createStudent: {
        type: CreateStudentPayload,
        args: {
          input: {
            type: new GraphQLNonNull(CreateStudentInput),
          },
        },
        resolve: async ({},
          { input: { username, firstName, lastName, gradeLevel} }) => { 
          const { user, ...student } = nullthrows(
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
                          lastName,
                        },
                      },
                      gradeLevel,
                      // courses: {
                      //   connect: { id: courseId },
                      // },
                    },
                    include: { user: true },
                  }),
                  'Could not create instructor',
                );
                return { ...user, ...student };
        }
      },
    }
  })