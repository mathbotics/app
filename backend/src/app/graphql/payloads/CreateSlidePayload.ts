import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Slide } from "../../server/GraphQLSchema";

export const CreateSlidePayload = new GraphQLObjectType({
    name: "CreateSlidePayload",
    description: "Slide type definition",
    fields: () => ({
        slide: { type: new GraphQLNonNull(Slide)}
    })
});