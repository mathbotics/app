import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Student } from "../../server/GraphQLSchema";

export const CreateStudentPayload = new GraphQLObjectType({
    name: "CreateStudentPayload",
    description: "Student type definition",
    fields: () => ({
        student: { type: new GraphQLNonNull(Student)}
    })
});