import { GraphQLObjectType } from "graphql";
import {createStudentMutation } from "./createStudent";
import { logIn } from "./logIn"
import { createLessonMutation } from "./createLesson"
import { deleteLessonMutation } from "./deleteLesson"
import { updateLessonMutation } from "./updateLesson" 
import { updateCourseMutation } from "./updateCourse"
import { updateBlockToMultipleChoiceBlockMutation } from "./updateBlockToMultipleChoiceBlock"

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudentMutation,
      logIn,
      createLessonMutation,
      deleteLessonMutation,
      updateLessonMutation,
      updateCourseMutation,
      updateBlockToMultipleChoiceBlockMutation
    } 
  })