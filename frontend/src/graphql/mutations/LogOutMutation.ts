import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
//import { LogInInput } from './__generated__/LogInMutation.graphql';

const mutation = graphql`
  mutation LogOutMutation {
    logOut 
    }
`;

function commit(
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
) {
  commitMutation(environment, {
    mutation,
    variables: {},
    onCompleted: onSuccess,
    onError: onFailure,
  });
}

export { commit };
