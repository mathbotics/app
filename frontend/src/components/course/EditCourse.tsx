import React, { useState } from "react";
import { Layout, Tabs, Typography } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { EditCourse_course } from "./__generated__/EditCourse_course.graphql";
import { EditCourseDetails } from "./EditCourseDetails";
import EditCourseLessonPlan from "./EditCourseLessonPlan";
import EditCourseStudents from "./EditCourseStudents";

import { EditCourse_query } from "./__generated__/EditCourse_query.graphql";

const { TabPane } = Tabs;
const { Title } = Typography;

enum PageState {
  Default,
  UpdateCourseSuccess,
  UpdateCourseError,
}
type Tab = { title: string; Component: JSX.Element };
type Props = { course: EditCourse_course; query: EditCourse_query };
const EditCourse = ({ course, query }: Props) => {
  const [pageState, setPageState] = useState<PageState>(
    PageState.UpdateCourseSuccess
  );
  const tabs: Tab[] = [
    {
      title: "Lesson Plan",
      Component: (
        <EditCourseLessonPlan lessonPlan={course.lessonPlan} query={query} />
      ),
    },
    {
      title: "Students",
      Component: <EditCourseStudents course={course} />,
    },
    {
      title: "Course Details",
      Component: (
        <EditCourseDetails
          onSubmitSuccess={() => setPageState(PageState.UpdateCourseSuccess)}
          onSubmitError={(e: Error) => {
            console.error(e);
            setPageState(PageState.UpdateCourseError);
          }}
        />
      ),
    },
  ];
  const handleTabChange = (key: string) => console.log({ key });

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <div style={{}}>
        <Title level={1} style={{ fontWeight: 700 }}>
          {course.name}
        </Title>
      </div>

      <Tabs defaultActiveKey="0" onChange={handleTabChange}>
        {tabs.map(({ title, Component }: Tab, index: number) => (
          <TabPane key={index.toString()} tab={title}>
            {Component}
          </TabPane>
        ))}
      </Tabs>
    </Layout>
  );
};

export default createFragmentContainer(EditCourse, {
  course: graphql`
    fragment EditCourse_course on Course {
      ...EditCourseStudents_course
      id
      name
      lessonPlan {
        ...EditCourseLessonPlan_lessonPlan
        ...LessonPlanCatalogue_lessonPlan
      }
    }
  `,
  query: graphql`
    fragment EditCourse_query on Query {
      ...EditCourseLessonPlan_query
    }
  `,
});
