import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { User } from "../../server/objects";

export const ResetPasswordPayload = new GraphQLObjectType({
    name: "ResetPasswordPayload",
    description: "User type definition",
    fields: () => ({
        user: { type: new GraphQLNonNull(User)}
    })
})