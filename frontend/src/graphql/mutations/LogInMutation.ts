import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';

const mutation = graphql`
mutation LogInMutation($input: LoginInput!) {
  logIn(input: $input) {
  user{
    id
    }
  }
}
`;


function commit(
  input: {username, password}, 
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
