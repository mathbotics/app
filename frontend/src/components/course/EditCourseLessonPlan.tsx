import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
// import { EditCourseLessonPlan_lessonPlan } from './__generated__/EditCourseLessonPlan_lessonPlan.graphql';
import LessonPlanSidebar from './LessonPlanSidebar';
import { EditCourseLessonPlan_query } from './__generated__/EditCourseLessonPlan_query.graphql';
import LessonPlanCatalogue from './LessonPlanCatalogue';
import { EditCourseLessonPlan_course } from './__generated__/EditCourseLessonPlan_course.graphql';

type Props = {
  course: EditCourseLessonPlan_course;
  query: EditCourseLessonPlan_query;
};
const { Sider, Content } = Layout;

//take out lessonplan
export const EditCourseLessonPlan = ({ course, query }: Props) => {
  // course id to be deleted gets sent here
  const [courseToDelete, setCourseToBeDeleted] = useState<String>("");
  const [courseToDeleteArray, setCourseToBeDeletedArray] = useState<String[]>([]);

  useEffect(() => {
    console.log(`EditCourseLessonPlan - useEffect: courseToDeleteArray Updated: `, courseToDeleteArray);
    console.log(`EditCourseLessonPlan - useEffect: courseToDelete Updated: `, courseToDelete);
  }, [courseToDelete, courseToDeleteArray])
  return (
    <Wrapper>

      {course.courses.length > 0 && (
        <Sider
          width={350}
          theme="light"
          style={{
                  overflow: 'scroll',
                  height: '650px',
                  borderRadius: '5px',
                  marginRight: '20px',
                  position: 'relative',
                }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      textDecoration: 'underline',
                    }}
            >
              Lesson Plan
            </h1>
            <LessonPlanSidebar
              course={course}
              setCourseToBeDeleted={(id) => setCourseToBeDeleted(id)}
              setCourseToBeDeletedArray={
                (lessons) => setCourseToBeDeletedArray([...courseToDeleteArray, ...lessons])
              }
            />
          </div>
        </Sider>
        )}

      <LessonPlanCatalogue
        query={query}
        course={course}
        courseToDelete={courseToDelete}
        lessonIdsInLessonPlan={courseToDeleteArray}
      />

    </Wrapper>
  )
};

const Wrapper = styled(Layout)`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export default createFragmentContainer(EditCourseLessonPlan, {
  query: graphql`
    fragment EditCourseLessonPlan_query on Query {
      ...LessonPlanCatalogue_query
    }
  `,
  course: graphql`
    fragment EditCourseLessonPlan_course on Course {
      id
      courses{
        lesson{
          id
          title
          slides{
            id
            title
          }
        }
      }
      
      ...LessonPlanSidebar_course
      ...LessonPlanCatalogue_course
    }
  
  `
});
