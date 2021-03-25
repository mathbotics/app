import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MultipleChoiceQuestionResponse } from "../../server/objects/blocks";

export const CreateMultipleChoiceQuestionResponsePayload = new GraphQLObjectType({
    name: "CreateMultipleChoiceResponsePayload",
    description: "Response type definition",
    fields: () => ({
        MultipleChoiceQuestionResponse: { type: new GraphQLNonNull(MultipleChoiceQuestionResponse)}
    })
});