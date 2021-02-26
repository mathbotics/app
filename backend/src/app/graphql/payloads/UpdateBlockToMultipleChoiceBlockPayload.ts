import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Block, MultipleChoiceQuestionBlock} from "../../server/GraphQLSchema";

export const UpdateBlockToMultipleChoiceBlockPayload = new GraphQLObjectType({
    name: "UpdateBlockToMultipleChoiceBlockPayload",
    description: "MC block type definition",
    fields: () => ({
        multipleChoiceQuestionBlock: { type: new GraphQLNonNull(MultipleChoiceQuestionBlock)}
    })
});