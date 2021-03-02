import { GraphQLInputObjectType, GraphQLString } from "graphql";

export const CourseWhereUniqueInput = new GraphQLInputObjectType({
    name: "CourseWhereUniqueInput",
    fields: () => ({
        id: { type: GraphQLString}
    })
})