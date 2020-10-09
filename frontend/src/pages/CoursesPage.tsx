import React from 'react';
import { QueryRenderer } from 'react-relay';

import { graphql } from 'babel-plugin-relay/macro';
import { environment } from '../graphql/relay';

import Courses from '../components/course/Courses';
import { CoursesPageQueryResponse } from './__generated__/CoursesPageQuery.graphql';

export const CoursesPageQuery = graphql`
  query CoursesPageQuery {
    ...Courses_query
  }
`;

export const CoursesPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={CoursesPageQuery}
    render={({ props, error }) =>
      !error && props && <Courses query={props as CoursesPageQueryResponse} />}
  />
);
