import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Slide } from "../../server/objects";

export const CreateSlidePayload = new GraphQLObjectType({
    name: "CreateSlidePayload",
    description: "Slide type definition",
    fields: () => ({
        slide: { type: new GraphQLNonNull(Slide)}
    })
});