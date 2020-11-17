import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import { LessonsPageQueryResponse } from './__generated__/LessonsPageQuery.graphql';
import Grades from '../components/grades/Grades';

export const GradesPageQuery = graphql`
  query LessonsPageQuery {
    ...Lessons_lessons
  }
`;

export const GradesPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={GradesPageQuery}
    render={({ props, error }) =>
      !error && props && <Grades lessons={props as LessonsPageQueryResponse} />}
  />
);
