import { GraphQLObjectType } from "graphql";
import {createStudentMutation } from "./createStudent";
import {createCourseMutation } from "./createCourse";
import {deleteCourseMutation} from "./deleteCourse"
import { deleteSingleStudent } from "./deleteStudent"
import { deleteStudents } from "./deleteStudents"
import { logIn } from "./logIn"

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudentMutation,
      logIn,
      createCourseMutation,
      deleteCourseMutation,
      deleteSingleStudent,
      deleteStudents
    } 
  })