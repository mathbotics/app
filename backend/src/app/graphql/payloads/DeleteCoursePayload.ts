import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Course } from "../../server/objects/courses";

export const DeleteCoursePayload = new GraphQLObjectType({
    name: "DeleteCoursePayload",
    description: "Course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)}
    })
});