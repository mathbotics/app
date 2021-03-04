import { GraphQLInputObjectType, GraphQLString } from "graphql";

export const LessonWhereUniqueInput = new GraphQLInputObjectType({
    name: "LessonWhereUniqueInput",
    fields: () => ({
        id: { type: GraphQLString}
    })
})