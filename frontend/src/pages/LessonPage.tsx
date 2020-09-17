import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { useParams } from 'react-router-dom';
import nullthrows from 'nullthrows';

import { environment } from '../graphql/relay';
import { LessonPageQueryResponse } from './__generated__/LessonPageQuery.graphql';
import Lesson from '../components/lessons/Lesson';

const Query = graphql`
  query LessonPageQuery($where: LessonWhereUniqueInput!) {
    lesson(where: $where) {
      ...Lesson_lesson
    }
  }
`;

export const LessonPage = (): JSX.Element => {
  const { lessonId } = useParams();

  return (
    <QueryRenderer
      environment={environment}
      variables={{ where: { id: lessonId } }}
      query={Query}
      render={({ props, error }) =>
        !error &&
        (props as LessonPageQueryResponse | null)?.lesson && (
          <Lesson
            lesson={nullthrows(
              (props as LessonPageQueryResponse).lesson,
              'Lesson not found',
            )}
          />
        )
      }
    />
  );
};
