import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { useParams } from 'react-router-dom';
import nullthrows from 'nullthrows';
import { environment } from '../graphql/relay';
import Slides from '../components/slides/Slides';
import { SlidesPageQueryResponse } from './__generated__/SlidesPageQuery.graphql';

const Query = graphql`
  query SlidesPageQuery($where: LessonWhereUniqueInput!) {
    lesson(where: $where) {
      ...Slides_lesson
    }
  }
`;

export const SlidesPage = (): JSX.Element => {
  const { lessonId } = useParams();

  return (
    <QueryRenderer
      environment={environment}
      variables={{ where: { id: lessonId } }}
      query={Query}
      render={({ props, error }) =>
        !error &&
        (props as SlidesPageQueryResponse | null)?.lesson && (
          <Slides
            lesson={nullthrows(
              (props as SlidesPageQueryResponse).lesson,
              'Lesson not found',
            )}
          />
        )}
    />
  );
};
