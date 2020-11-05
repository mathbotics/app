import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { DeleteSingleStudentInput } from "./__generated__/DeleteSingleStudentMutation.graphql";

const mutation = graphql`
    mutation DeleteSingleStudentMutation($input: DeleteSingleStudentInput!) {
        deleteSingleStudent(input: $input) {
            id
        }
    }
`;

function commit(
  input: DeleteSingleStudentInput,
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
