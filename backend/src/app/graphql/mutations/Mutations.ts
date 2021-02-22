import { GraphQLObjectType } from "graphql";
import {createStudentMutation } from "./createStudent";
import { logIn } from "./logIn"

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudentMutation,
      logIn
    } 
  })