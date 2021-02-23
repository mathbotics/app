import React from 'react';

import { Layout, Result } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import styled from 'styled-components';
import { CoursesList_courses } from './__generated__/CoursesList_courses.graphql';
import { CoursesList_user } from './__generated__/CoursesList_user.graphql';
import CourseCard from './CourseCard';

// import { useHistory } from "react-router-dom";

const Wrapper = styled(Layout)`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CardWrapper = styled.div`
  min-width: 375px;
  max-width: 18%;
  margin: 10px;
`;

/*Original 
type Props = { courses: CoursesList_courses };
*/
type Props = { courses: CoursesList_courses;
  user: CoursesList_user;
 };
 
 //original: no user
const CoursesList = ({ courses, user }: Props) =>
  // const history = useHistory();
   (
     <Wrapper>
       {courses.courses.length === 0 && (
       <Result
         style={{ margin: 'auto' }}
          // @ts-ignore
         status="404"
         title="No courses found"
         subTitle="Looks like you have no courses!"
       />
      )}
       {courses.courses.map((course) => (
         <CardWrapper
           key={course.id}
         >
           <CourseCard key={course.id} course={course} user={user} />
         </CardWrapper>
      ))}
     </Wrapper>
  );

 //original had no user fragment 
export default createFragmentContainer(CoursesList, {
  courses: graphql`
    fragment CoursesList_courses on Query {
      courses {
        id
        ...CourseCard_course
      }
    }
  `,
  user: graphql`
    fragment CoursesList_user on User {
      ...CourseCard_user
    }
  `,
});
