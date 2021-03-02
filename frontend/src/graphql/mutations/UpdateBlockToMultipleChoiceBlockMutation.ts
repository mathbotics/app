import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { UpdateBlockToMultipleChoiceBlockMutationVariables } from './__generated__/UpdateBlockToMultipleChoiceBlockMutation.graphql';

const mutation = graphql`
  mutation UpdateBlockToMultipleChoiceBlockMutation(
    $input: UpdateBlockToMultipleChoiceBlockInput!
  ) {
    updateBlockToMultipleChoiceBlock(input: $input) {
      multipleChoiceQuestionBlock{
        id
      ...MultipleChoiceQuestionBlock_block
      }
    }
  }
`;

export const commit = (
  variables: UpdateBlockToMultipleChoiceBlockMutationVariables,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
  });
