import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Lesson } from "../../server/objects";

export const CreateLessonPayload = new GraphQLObjectType({
    name: "CreateLessonPayload",
    description: "Lesson type definition",
    fields: () => ({
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
});