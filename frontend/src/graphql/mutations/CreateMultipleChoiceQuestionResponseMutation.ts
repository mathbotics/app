import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { CreateMultipleChoiceQuestionResponseMutationVariables } from './__generated__/CreateMultipleChoiceQuestionResponseMutation.graphql';


//need to find a way to update the schema.graphql of the frontend only. (look at line 251, type Mutation { ... }), it needs to follow that.
//after this process is done, you can yarn relay again.
const mutation = graphql`
  mutation CreateMultipleChoiceQuestionResponseMutation(
    $input: createMultipleChoiceQuestionResponseInput!
  ) {
    createResponse(input: $input) {
      multipleChoiceQuestionBlockId
      multipleChoiceQuestionChoiceId
      studentId
    }
  }
`;

export const commit = (
  variables: CreateMultipleChoiceQuestionResponseMutationVariables,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure,
  });
