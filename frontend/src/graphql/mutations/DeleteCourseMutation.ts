import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { DeleteCourseInput } from "./__generated__/DeleteCourseMutation.graphql";

const mutation = graphql`
    mutation DeleteCourseMutation($input: DeleteCourseInput!) {
        deleteCourse(input: $input) {
            ...EditCourse_course
        }
    }
`;

function commit(
  input: DeleteCourseInput,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void,
) {
  const variables = {
    input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
}

export { commit };