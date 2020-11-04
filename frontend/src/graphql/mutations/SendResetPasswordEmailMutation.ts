import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { SendResetPasswordEmailInput } from './__generated__/SendResetPasswordEmailMutation.graphql';

const mutation = graphql`
  mutation SendResetPasswordEmailMutation($input: SendResetPasswordEmailInput!) {
    sendResetPasswordEmail(input: $input)
  }
`;

function commit(
  input: SendResetPasswordEmailInput,
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
