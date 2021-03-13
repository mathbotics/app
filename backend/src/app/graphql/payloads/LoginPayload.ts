import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { User } from "../../server/objects";

export const LoginPayload = new GraphQLObjectType({
    name: "LoginPayload",
    description: "User type definition",
    fields: () => ({
        user: { type: new GraphQLNonNull(User)}
    })
});