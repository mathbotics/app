import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { DeleteLessonInput } from './__generated__/DeleteOneLessonMutation.graphql';

const mutation = graphql`
    mutation DeleteOneLessonMutation($input: DeleteLessonInput!) {
        deleteLesson(input: $input) {
            lesson{
              id
            }
        }
    }
`;

function commit(
    input: DeleteLessonInput,
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
