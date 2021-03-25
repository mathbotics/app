import { GraphQLObjectType, GraphQLString } from "graphql";

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
          type: GraphQLString,
          resolve(MultipleChoiceQuestionResponse) {
            return MultipleChoiceQuestionResponse.multipleChoiceQuestionChoiceId
          }
        },
        student: {
          type: GraphQLString,
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.studentId
          }
        }
      }
    }
  });