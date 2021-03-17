import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const MultipleChoiceQuestionChoice = new GraphQLObjectType({
    name: "MultipleChoiceQuestionChoice",
    description: "This represents the MultipleChoiceQuestionChoice",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.id
          }
        },
        text: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.text
          }
        },
        correct: {
          type: new GraphQLNonNull(GraphQLBoolean),
          resolve(MultipleChoiceQuestionChoice) {
            return MultipleChoiceQuestionChoice.correct
          }
        }
      }
    }
  });
  
  