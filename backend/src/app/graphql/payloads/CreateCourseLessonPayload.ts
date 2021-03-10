import {GraphQLNonNull, GraphQLObjectType} from "graphql";
import {Course, Lesson} from "../../server/GraphQLSchema";

export const CreateCourseLessonPayload = new GraphQLObjectType({
    name: "CreateCourseLessonPayload",
    description: "course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)},
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
})