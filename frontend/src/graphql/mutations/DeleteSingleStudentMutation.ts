import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { DeleteStudentInput } from "./__generated__/DeleteSingleStudentMutation.graphql";

const mutation = graphql`
    mutation DeleteSingleStudentMutation($input: DeleteStudentInput!) {
        deleteSingleStudent(input: $input) {
          student{
            id
          }
        }
    }
`;

function commit(
  input: DeleteStudentInput,
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
