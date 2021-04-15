import { GraphQLObjectType } from "graphql";
import {createStudent } from "./createStudent";
import {createOneCourse } from "./createCourse";
import {deleteCourse} from "./deleteCourse"
import { deleteSingleStudent } from "./deleteStudent"
import { editStudent } from "./editStudent"
import { deleteStudents } from "./deleteStudents"
import { logIn } from "./logIn"
import { createSlide } from "./createSlide"
import { updateBlockToTextBlock } from "./updateBlockToTextBlock"
import { updateBlockToMultipleChoiceBlock } from "./updateBlockToMultipleChoiceBlock"
import { createOneLesson } from "./createLesson"
import { deleteLesson } from "./deleteLesson"
import { updateOneLesson } from "./updateLesson" 
import { updateOneCourse } from "./updateCourse"
import { logOut } from "./logout"
import { registerUser } from "./registerUser"
import { sendInvitationEmail } from "./sendInvitationEmail"
import { sendResetPasswordEmail } from "./sendResetPasswordEmail"
import { resetPassword } from "./resetPassword"
import { createCourseLesson} from "./createCourseLesson"
import {createResponse} from "./createMultipleChoiceQuestionResponse"
import { removeCourseLesson } from "./removeCourseLesson";
import { answerMultipleChoiceBlockForLesson } from './answerMultipleChoiceQuestionBlock';

export const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
      createStudent,
      logIn,
      createOneCourse,
      deleteSingleStudent,
      editStudent,
      createSlide,
      updateBlockToTextBlock,
      updateBlockToMultipleChoiceBlock,
      deleteCourse,
      deleteStudents,
      createOneLesson,
      deleteLesson,
      updateOneLesson,
      updateOneCourse,
      logOut,
      registerUser,
      sendInvitationEmail,
      sendResetPasswordEmail,
      resetPassword,
      createCourseLesson,
      createResponse,
      removeCourseLesson,
      answerMultipleChoiceBlockForLesson,
    } 
  })