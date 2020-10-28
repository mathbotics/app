import React from 'react';
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
export const EditCourseLessonPlan = ({ lessonPlan, query }: Props) => (

  <Wrapper>
   
    {lessonPlan.lessons.length > 0 && (
      <Sider
      width={350}
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        borderRadius: '5px',
        marginRight: '20px',
        flex: '0 0 100vh',
        position: 'relative'
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
      <LessonPlanSidebar lessonPlan={lessonPlan} />
    </div>
    </Sider>
      )}

    <LessonPlanCatalogue query={query} lessonPlan={lessonPlan} />

  </Wrapper>

  );

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
