import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Course } from "../../server/GraphQLSchema";

export const UpdateCoursePayload = new GraphQLObjectType({
    name: "UpdateCoursePayload",
    description: "Course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)}
    })
});