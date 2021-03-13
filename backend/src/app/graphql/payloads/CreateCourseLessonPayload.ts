import {GraphQLNonNull, GraphQLObjectType} from "graphql";
import {Course, Lesson} from "../../server/objects";

export const CreateCourseLessonPayload = new GraphQLObjectType({
    name: "CreateCourseLessonPayload",
    description: "course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)},
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
})