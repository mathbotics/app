import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Student } from "../../GraphQLSchema";
import { MultipleChoiceQuestionChoice } from "./MultipleChoiceQuestionChoice";
import { MultipleChoiceQuestionBlock } from "./MultipleChoiceQuestionBlock";

export const MultipleChoiceQuestionResponse = new GraphQLObjectType({
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
            return MultipleChoiceQuestionResponse.multipleChoiceQuestionChoiceId
          }
        },
        student: {
          type: new GraphQLNonNull(Student),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.studentId
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