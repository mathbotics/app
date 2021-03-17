import {GraphQLNonNull, GraphQLObjectType} from "graphql";
import { Lesson } from "../../server/objects";
import {Course} from "../../server/objects/courses";

export const CreateCourseLessonPayload = new GraphQLObjectType({
    name: "CreateCourseLessonPayload",
    description: "course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)},
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
})