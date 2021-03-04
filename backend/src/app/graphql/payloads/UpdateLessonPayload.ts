import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Lesson } from "../../server/GraphQLSchema";

export const UpdateLessonPayload = new GraphQLObjectType({
    name: "UpdateLessonPayload",
    description: "Lesson type definition",
    fields: () => ({
        lesson: { type: new GraphQLNonNull(Lesson)}
    })
});