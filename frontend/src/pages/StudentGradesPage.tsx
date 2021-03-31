import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import { StudentGradesPageQueryResponse } from './__generated__/StudentGradesPageQuery.graphql';
import StudentGrades from '../components/grades/StudentGrades';
import { useParams } from 'react-router';

export const StudentGradesPageQuery = graphql`
query StudentGradesPageQuery($id: ID!){
  studentGradesQuery(id: $id){
    course{
      name
      lessons{
        id
        title
      }
    }
    student{
      id
      grades{
        courseId
        grade
      }
    }
  }
}
`;

export const StudentGradesPage = () => {
  const {studentId} = useParams();

  return (<QueryRenderer
    environment={environment}
    variables={{id: studentId}}
    query={StudentGradesPageQuery}
    render={({ props, error }) =>
      !error && props && (
      <StudentGrades 
      studentGradesQuery={props as StudentGradesPageQueryResponse}
      />  
    )}
  />
  );
};
