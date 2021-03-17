import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { TextBlock } from "../../server/objects/blocks";

export const UpdateBlockToTBPayload = new GraphQLObjectType({
    name: "UpdateBlockToTBPayload",
    description: "Text Block type definition",
    fields: () => ({
        textBlock: { type: new GraphQLNonNull(TextBlock)}
    })
})