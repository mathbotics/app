import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { TextBlock } from "../../server/GraphQLSchema";

export const UpdateBlockToTBPayload = new GraphQLObjectType({
    name: "UpdateBlockToTBPayload",
    description: "Text Block type definition",
    fields: () => ({
        textBlock: { type: new GraphQLNonNull(TextBlock)}
    })
})