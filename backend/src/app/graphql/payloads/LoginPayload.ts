import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { User } from "../../server/GraphQLSchema";

export const LoginPayload = new GraphQLObjectType({
    name: "LoginPayload",
    description: "Student type definition",
    fields: () => ({
        user: { type: User}
    })
});