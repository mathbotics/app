import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { environment } from '../graphql/relay';
import { LessonsPageQueryResponse } from './__generated__/LessonsPageQuery.graphql';
import { QueryRenderer } from 'react-relay';
import Lessons from '../components/lessons/Lessons';

export const LessonsPageQuery = graphql`
  query LessonsPageQuery {
    ...Lessons_lessons
  }
`;

export const LessonsPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={LessonsPageQuery}
    render={({ props, error }) =>
      !error && props && <Lessons lessons={props as LessonsPageQueryResponse} />
    }
  />
);
