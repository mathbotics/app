import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Lesson } from "../../server/objects";

export const DeleteLessonPayload = new GraphQLObjectType({
    name: "DeleteLessonPayload",
    description: "Lesson type definition",
    fields: () => ({
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
});