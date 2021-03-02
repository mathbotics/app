import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { CreateStudentInput } from "./__generated__/CreateStudentMutation.graphql";

const mutation = graphql`
    mutation CreateStudentMutation($input: CreateStudentInput!) {
        createStudent(input: $input) {
          student{
            username
            firstName
            lastName
            gradeLevel
          }
        }
    }
`;

function commit(
  input: CreateStudentInput,
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
      const student = store.getRootField("createStudent");
      const course = store.get(courseId);
      const students = course?.getLinkedRecords("students") ?? [];
      course?.setLinkedRecords([...students, student], "students");
    },
  });
}

export { commit };
