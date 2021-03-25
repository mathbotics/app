import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import { InstructorGradebookPageQueryResponse } from './__generated__/InstructorGradebookPageQuery.graphql';
import InstructorGradebook from '../components/grades/InstructorGradebook';

export const InstructorGradebookPageQuery = graphql`
  query InstructorGradebookPageQuery {
    ...InstructorGradebook_course
    ...InstructorGradebook_lessons
    ...InstructorGradebook_grades
  }
`;

export const InstructorGradebookPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={InstructorGradebookPageQuery}
    render={({ props, error }) =>
      !error &&
      props && (
        <InstructorGradebook
          lessons={props as InstructorGradebookPageQueryResponse}
          course={props as InstructorGradebookPageQueryResponse}
          grades={props as InstructorGradebookPageQueryResponse}
        />
      )}
  />
);
