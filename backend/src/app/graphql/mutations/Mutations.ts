import { GraphQLObjectType } from "graphql";
import {createStudentMutation } from "./createStudent";
import {createCourseMutation } from "./createCourse";
import {deleteCourseMutation} from "./deleteCourse"
import { logIn } from "./logIn"

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudentMutation,
      logIn,
      createCourseMutation,
      deleteCourseMutation
    } 
  })