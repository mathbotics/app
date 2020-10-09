import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { DeleteStudentInput } from './__generated__/DeleteStudentMutation.graphql';

const mutation = graphql`
mutation DeleteStudentMutation(
    $input: DeleteStudentInput!
  ) {
      deleteStudent(input: $input) {
      courses{
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
    updater(store) {
      const { courseId } = variables.input;
      const student = store.getRootField('deleteStudent');
      const course = store.get(courseId);
      const students = course?.getLinkedRecords('students') ?? [];
      course?.setLinkedRecords([...students, student], 'students');
    },
  });
}

export { commit };
