import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import { StudentGradesPageQueryResponse } from './__generated__/StudentGradesPageQuery.graphql';
import StudentGrades from '../components/grades/StudentGrades';

export const StudentGradesPageQuery = graphql`
  query StudentGradesPageQuery {
    ...StudentGrades_lessons
  }
`;

export const StudentGradesPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={StudentGradesPageQuery}
    render={({ props, error }) =>
      !error && props && <StudentGrades lessons={props as StudentGradesPageQueryResponse}/> }
  />
);
