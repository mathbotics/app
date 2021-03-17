import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Course} from "../../server/objects/courses";

export const DeleteStudentsPayload = new GraphQLObjectType({
    name: "DeleteStudentsPayload",
    description: "Deleting students",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)}
    })
});