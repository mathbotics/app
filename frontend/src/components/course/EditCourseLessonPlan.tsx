import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { EditCourseLessonPlan_lessonPlan } from './__generated__/EditCourseLessonPlan_lessonPlan.graphql';
import LessonPlanSidebar from './LessonPlanSidebar';
import { EditCourseLessonPlan_query } from './__generated__/EditCourseLessonPlan_query.graphql';
import LessonPlanCatalogue from './LessonPlanCatalogue';

type Props = {
  lessonPlan: EditCourseLessonPlan_lessonPlan;
  query: EditCourseLessonPlan_query;
};
const { Sider, Content } = Layout;

export const EditCourseLessonPlan = ({ lessonPlan, query }: Props) => {
  // course id to be deleted gets sent here
  const [courseToDelete, setCourseToBeDeleted] = useState<String>("");
  // TODO convert to array
  const [courseToDeleteArray, setCourseToBeDeletedArray] = useState<String[]>([]);

  // useEffect(() => {
  //   console.log(`courseToDeleteArray Updated: ${courseToDeleteArray}`);
  // }, [courseToDeleteArray])
  return (
    <Wrapper>

      {lessonPlan.lessons.length > 0 && (
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
              lessonPlan={lessonPlan}
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
        lessonPlan={lessonPlan}
        courseToDelete={courseToDelete}
        courseToDeleteArray={courseToDeleteArray}
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
  lessonPlan: graphql`
    fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
      id
      lessons {
        id
      }
      ...LessonPlanSidebar_lessonPlan
      ...LessonPlanCatalogue_lessonPlan
    }
  `,
  query: graphql`
    fragment EditCourseLessonPlan_query on Query {
      ...LessonPlanCatalogue_query
    }
  `,
});
