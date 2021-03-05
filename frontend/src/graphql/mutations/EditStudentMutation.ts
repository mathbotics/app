import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { EditStudentInput } from "./__generated__/EditStudentMutation.graphql";

const mutation = graphql`
    mutation EditStudentMutation($input: EditStudentInput!) {
        editStudent(input: $input) {
            student {
              username
              firstName
              lastName
              gradeLevel
            }
        }
    }
`;

function commit(
  input: EditStudentInput,
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
      const { studentId } = variables.input;
      const student = store.getRootField("editStudent");
      const course = store.get(studentId!);
      const students = course?.getLinkedRecords("students") ?? [];
      course?.setLinkedRecords([...students, student], "students");
    },
  });
}

export { commit };
