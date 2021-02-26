import { GraphQLObjectType } from "graphql";
import {createStudent } from "./createStudent";
import {createCourseMutation } from "./createCourse";
import { deleteSingleStudent } from "./deleteStudent"
import { editStudent } from "./editStudent"
import { logIn } from "./logIn"
import { createSlide } from "./createSlide"
import { updateBlockToTextBlock } from "./updateBlockToTextBlock"

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudent,
      logIn,
      createCourseMutation,
      deleteSingleStudent,
      editStudent,
      createSlide,
      updateBlockToTextBlock
    } 
  })