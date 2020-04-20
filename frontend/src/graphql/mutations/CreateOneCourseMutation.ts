import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { CourseCreateInput } from "./__generated__/CreateOneCourseMutation.graphql";

const mutation = graphql`
  mutation CreateOneCourseMutation($data: CourseCreateInput!) {
    createOneCourse(data: $data) {
      id
    }
  }
`;

function commit(
  input: CourseCreateInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) {
  const variables = {
    data: input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
  });
}

export { commit };
