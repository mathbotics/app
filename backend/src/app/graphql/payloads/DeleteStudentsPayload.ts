import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { Course} from "../../server/objects";

export const DeleteStudentsPayload = new GraphQLObjectType({
    name: "DeleteStudentsPayload",
    description: "Deleting students",
    fields: () => ({
        course: { type: new GraphQLNonNull(Course)}
    })
});