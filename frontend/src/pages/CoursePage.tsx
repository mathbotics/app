import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import nullthrows from 'nullthrows';
import { environment } from '../graphql/relay';
import Course from '../components/course/Course';
import { CoursePageQueryResponse } from './__generated__/CoursePageQuery.graphql';

export const CoursePageQuery = graphql`
  query CoursePageQuery($where: CourseWhereUniqueInput!) {
    course(where: $where) {
      ...Course_course
    }
  }
`;


export const CoursePage = (): JSX.Element => {
  const { courseId }:any = useParams();

  return (
    <QueryRenderer
      environment={environment}
      variables={{ where: { id: courseId } }}
      query={CoursePageQuery}
      render={({ props, error }) =>
        !error &&
        props && (
          <Course
            course={nullthrows(
              (props as CoursePageQueryResponse)?.course,
              'Course not found',
            )}
          />
        )}
    />
  );
};
