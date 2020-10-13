import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { RegisterUserInput } from './__generated__/RegisterUserMutation.graphql';

const mutation = graphql`
  mutation RegisterUserMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      username
    }
  }
`;

function commit(
  input: RegisterUserInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
) {
  const variables = {
    input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
  });
}

export { commit };
