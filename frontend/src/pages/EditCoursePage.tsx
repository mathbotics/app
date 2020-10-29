import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import nullthrows from 'nullthrows';
import { environment } from '../graphql/relay';

import EditCourse from '../components/course/EditCourse';
import { EditCoursePageQueryResponse } from './__generated__/EditCoursePageQuery.graphql';

const Query = graphql`
  query EditCoursePageQuery($where: CourseWhereUniqueInput!) {
    course(where: $where) {
      ...EditCourse_course
    }
    student(where:{id:"ckgljwsjw00044jqp7t4g7q4l"}) {
      ...EditCourse_student
    }
    ...EditCourse_query
  }
`;

export const EditCoursePage = (): JSX.Element => {
  const { courseId } = useParams();

  return (
    <QueryRenderer
      environment={environment}
      variables={{ where: { id: courseId } }}
      query={Query}
      render={({ props, error }) =>
        !error &&
        (props as EditCoursePageQueryResponse | null)?.course && (
          <EditCourse
            course={nullthrows(
              (props as EditCoursePageQueryResponse)?.course,
              'Course not found',
            )}
            student={nullthrows(
              (props as EditCoursePageQueryResponse)?.student,
              'Course not found',
            )}
            query={nullthrows(props as EditCoursePageQueryResponse)}
          />
        )}
    />
  );
};
