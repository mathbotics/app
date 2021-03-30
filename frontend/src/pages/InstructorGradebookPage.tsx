import React from 'react';
import { useParams } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { environment } from '../graphql/relay';
import { InstructorGradebookPageQueryResponse } from './__generated__/InstructorGradebookPageQuery.graphql';
import InstructorGradebook from '../components/grades/InstructorGradebook';
import nullthrows from 'nullthrows';

export const InstructorGradebookPageQuery = graphql`
  query InstructorGradebookPageQuery($id: ID!){
    instructorGradeBookQuery(id: $id){
      id
      name
      lessons {
        id
        title
      }
      students {
        firstName
        lastName
        grades{
          lessonId
          courseId
          grade
        }
      }
    }
  }
`;

export const InstructorGradebookPage = () => {
  const { instructorId } = useParams(); //use this in variables to call query
  
  return ( <QueryRenderer
    environment={environment}
    variables={{id: instructorId}}
    query={InstructorGradebookPageQuery}
    render={({ props, error }) =>
      !error &&
      props && (
        <InstructorGradebook
        instructorGradeBookQuery={
            (props as InstructorGradebookPageQueryResponse)
          }
        />
      )}
  />
  );
};
