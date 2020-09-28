import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { UpdateBlockToTextBlockMutationVariables } from './__generated__/UpdateBlockToTextBlockMutation.graphql';

const mutation = graphql`
  mutation UpdateBlockToTextBlockMutation(
    $input: UpdateBlockToTextBlockInput!
  ) {
    updateBlockToTextBlock(input: $input) {
      id
      ...TextBlock_block
    }
  }
`;

export const commit = (
  variables: UpdateBlockToTextBlockMutationVariables,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
  });
