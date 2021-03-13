import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Student } from "../../server/objects";

export const CreateStudentPayload = new GraphQLObjectType({
    name: "CreateStudentPayload",
    description: "Student type definition",
    fields: () => ({
        student: { type: new GraphQLNonNull(Student)}
    })
});