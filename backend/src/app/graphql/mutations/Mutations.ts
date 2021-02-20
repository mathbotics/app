import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { CreateStudentPayload } from "../payloads/CreateStudentPayload";
import { CreateStudentInput, createStudentMutation } from "./createStudent";
import prisma from '../../data/prisma';
import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudentMutation
    } 
  })