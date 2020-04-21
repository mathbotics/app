import React from "react";
import { Layout, Input } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditCourseLessonPlan_lessonPlan } from "./__generated__/EditCourseLessonPlan_lessonPlan.graphql";
import LessonPlanSidebar from "./LessonPlanSidebar";
import { EditCourseLessonPlan_query } from "./__generated__/EditCourseLessonPlan_query.graphql";
import LessonPlanCatalogue from "./LessonPlanCatalogue";
import styled from "styled-components";

type Props = {
  lessonPlan: EditCourseLessonPlan_lessonPlan;
  query: EditCourseLessonPlan_query;
};
export const EditCourseLessonPlan = ({ lessonPlan, query }: Props) => {
  return (
    <Wrapper>
      <LessonPlanSidebar lessons={lessonPlan} />
      <LessonPlanCatalogue query={query} />
    </Wrapper>
  );
};

const Wrapper = styled(Layout)`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export default createFragmentContainer(EditCourseLessonPlan, {
  lessonPlan: graphql`
    fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
      ...LessonPlanSidebar_lessons
    }
  `,
  query: graphql`
    fragment EditCourseLessonPlan_query on Query {
      ...LessonPlanCatalogue_query
    }
  `,
});
