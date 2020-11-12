import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { LessonWhereUniqueInput } from './__generated__/DeleteOneLessonMutation.graphql';

const mutation = graphql`
    mutation DeleteOneLessonMutation(
        $where: LessonWhereUniqueInput!
    ) {
        deleteOneLesson(where: $where) {
            ...Lessons_lessons
        }
    }
`;

export const commit = (
  variables: LessonWhereUniqueInput,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void,
) =>
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });

