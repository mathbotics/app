import {GraphQLNonNull, GraphQLObjectType} from "graphql";
import {Course} from "../../server/GraphQLSchema";

export const CreateCoursePayload = new GraphQLObjectType({
    name: "CreateCoursePayload",
    description: "course type definition",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)}
    })
})