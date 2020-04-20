import React from "react";

import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import {
  EditCourseLessonPlan_lessonPlan,
  EditCourseLessonPlan_lessonPlan$key,
} from "./__generated__/EditCourseLessonPlan_lessonPlan.graphql";

type Props = { lessonPlan: EditCourseLessonPlan_lessonPlan };
export const EditCourseLessonPlan = ({ lessonPlan }: Props) => {
  return <>Lesson Plan {lessonPlan.id}</>;
};

export default createFragmentContainer(EditCourseLessonPlan, {
  lessonPlan: graphql`
    fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
      id
    }
  `,
});
