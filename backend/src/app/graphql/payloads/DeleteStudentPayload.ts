import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Student } from "../../server/GraphQLSchema";

export const DeleteStudentPayload = new GraphQLObjectType({
    name: "DeleteStudentPayload",
    description: "Student type definition",
    fields: () => ({
        student: { type: new GraphQLNonNull(Student)}
    })
});