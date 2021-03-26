import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { environment } from "../relay";
import { RemoveCourseLessonMutationVariables } from "./__generated__/RemoveCourseLessonMutation.graphql";

const mutation = graphql`
    mutation RemoveCourseLessonMutation($input: removeCourseLessonInput!) {
        removeCourseLesson(input: $input) {
            id
            ...EditCourseLessonPlan_course
        }
    }
`;

export const commit = (
  variables: RemoveCourseLessonMutationVariables,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
