import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';

import { GraphQLFloat, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { MultipleChoiceQuestionResponse } from "../../server/objects/blocks";


export const AnswerMultipleChoiceQuestionBlockForLessonInput = new GraphQLInputObjectType({
  name: "AnswerMultipleChoiceQuestionBlockForLessonInput",
  fields: () => ({
      lessonId: { type: GraphQLString},
      studentId: { type: GraphQLString}, 
      courseId: { type: GraphQLString},
      lessonGrade: { type: GraphQLFloat} 
  })
});

export const answerMultipleChoiceBlockForLesson = {
  type: MultipleChoiceQuestionResponse,
  args: {
    input: {
      type: new GraphQLNonNull(AnswerMultipleChoiceQuestionBlockForLessonInput),
    }
  },
  async resolve(root:any, args:any){
    const { lessonId, studentId, courseId, lessonGrade } = args.input; 
    const grades = await prisma.grade.create({
      data: {
        grade: lessonGrade,
        lesson:{
          connect:{
            id:lessonId
          }
        },
        student: {
          connect: {
            id: studentId
          }
        },
        course: {
          connect: {
            id: courseId
          }
        }
      }
    })
    console.log("assigned grade: ", grades);
    return grades;
  }
};
