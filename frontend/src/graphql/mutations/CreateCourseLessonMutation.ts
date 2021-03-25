import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { environment } from '../relay';
import {CreateCourseLessonMutationVariables } from './__generated__/CreateCourseLessonMutation.graphql';
   
const mutation = graphql`
  mutation CreateCourseLessonMutation(
    $input: createCourseLessonInput!
  ) {
    createCourseLesson(input: $createCourseLessonInput) {
        id
        ...EditCourseLessonPlan_course
    }
  }
`;

export const commit = (
  variables: CreateCourseLessonMutationVariables,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
