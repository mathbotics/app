import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { User } from "../../server/objects";

export const RegisterUserPayload = new GraphQLObjectType({
    name: "RegisterUserPayload",
    description: "User type definition",
    fields: () => ({
        user: { type: new GraphQLNonNull(User)}
    })
})