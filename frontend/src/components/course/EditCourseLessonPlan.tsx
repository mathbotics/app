import React from "react";
import LessonPlanSidebar from "./LessonPlanSidebar";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditCourseLessonPlan_lessonPlan } from "./__generated__/EditCourseLessonPlan_lessonPlan.graphql";

type Props = {
  lessonPlan: EditCourseLessonPlan_lessonPlan;
};
export const EditCourseLessonPlan = ({ lessonPlan }: Props) => {
  console.log(lessonPlan.lessons);
  return <>{/* <LessonPlanSidebar lessons={lessons} /> */}</>;
};

export default createFragmentContainer(EditCourseLessonPlan, {
  lessonPlan: graphql`
    fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
      id
      lessons {
        id
      }
    }
  `,
});
