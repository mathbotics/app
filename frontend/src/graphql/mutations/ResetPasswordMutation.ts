import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { ResetPasswordInput } from './__generated__/ResetPasswordMutation.graphql';

const mutation = graphql`
  mutation ResetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      user{
      username
      }
    }
  }
`;

function commit(
  input: ResetPasswordInput,
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
