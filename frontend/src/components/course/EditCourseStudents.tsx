import React from "react";
import { Layout } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import StudentsTable from "../students/StudentsTable";

import { EditCourseStudents_course } from "./__generated__/EditCourseStudents_course.graphql";

type Props = { course: EditCourseStudents_course };
const EditCourseStudents = ({ course }: Props) => {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <StudentsTable course={course} />
    </Layout>
  );
};

export default createFragmentContainer(EditCourseStudents, {
  course: graphql`
    fragment EditCourseStudents_course on Course {
      ...StudentsTable_course
    }
  `,
});
