import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Student } from "../../GraphQLSchema";
import { MultipleChoiceQuestionBlock } from "./MultipleChoiceQuestionBlock";
import { MultipleChoiceQuestionChoice } from "./MultipleChoiceQuestionChoice";

export const MultipleChoiceQuestionResponse:GraphQLObjectType = new GraphQLObjectType({
    name: "MultipleChoiceQuestionResponse",
    description: "This represents the MultipleChoiceQuestionResponse",
    fields: () => {
      return {
        id: {
          type: GraphQLString,
          resolve(MultipleChoiceQuestionResponse) {
            return MultipleChoiceQuestionResponse.id
          }
        },
        choice: {
          type: new GraphQLNonNull(MultipleChoiceQuestionChoice),
          resolve(MultipleChoiceQuestionResponse) {
            return MultipleChoiceQuestionResponse.choice
          }
        },
        student: {
          type: new GraphQLNonNull(Student),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.student
          }
        },
        MultipleChoiceQuestionBlock: {
          type: new GraphQLNonNull(MultipleChoiceQuestionBlock),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.MultipleChoiceQuestionBlock
          }
        },
        multipleChoiceQuestionBlockId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.multipleChoiceQuestionBlockId
          }
        },
        multipleChoiceQuestionChoiceId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.multipleChoiceQuestionChoiceId
          }
        },
        studentId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.studentId
          }
        }
      }
    }
  });