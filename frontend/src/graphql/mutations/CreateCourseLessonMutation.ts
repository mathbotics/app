import { commitMutation, DataID } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { environment } from '../relay';
import {CreateCourseLessonMutationVariables } from './__generated__/CreateCourseLessonMutation.graphql';
import { RecordProxy } from 'relay-runtime';
   
const mutation = graphql`
  mutation CreateCourseLessonMutation(
    $input: createCourseLessonInput!
  ) {
    createCourseLesson(input: $input) {
        id
        ...EditCourseLessonPlan_course
    }
  }
`;

export const commit = (
  variables: CreateCourseLessonMutationVariables,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError
  });
