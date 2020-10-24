import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { UpdateOneCourseMutationVariables } from './__generated__/UpdateOneCourseMutation.graphql';

const mutation = graphql`
  mutation UpdateOneCourseMutation(
    $data: CourseUpdateInput!
    $where: CourseWhereUniqueInput!
  ) {
    updateOneCourse(data: $data, where: $where) {
      ...EditCourse_course
    }
  }
`;

export const commit = (
  variables: UpdateOneCourseMutationVariables,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
