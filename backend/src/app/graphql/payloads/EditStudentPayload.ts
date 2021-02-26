import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Student } from "../../server/GraphQLSchema";

export const EditStudentPayload = new GraphQLObjectType({
    name: "EditStudentPayload",
    description: "Student type definition",
    fields: () => ({
        student: { type: new GraphQLNonNull(Student)}
    })
});