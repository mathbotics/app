import React from "react";
import { Layout, Tabs, Typography } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditCourse_course } from "./__generated__/EditCourse_course.graphql";
import { EditCourseDetails } from "./EditCourseDetails";
import { EditCourseLessonPlan } from "./EditCourseLessonPlan";
import { EditCourseLessonPlan_lessonPlan } from "./__generated__/EditCourseLessonPlan_lessonPlan.graphql";

const { TabPane } = Tabs;
const { Title } = Typography;

type Tab = {
  title: string;
  Component: JSX.Element;
};
type Props = { course: EditCourse_course };

const EditCourse = ({ course }: Props) => {
  const tabs: Tab[] = [
    {
      title: "Lesson Plan",
      Component: <EditCourseLessonPlan lessonPlan={course.lessonPlan} />,
    },
    { title: "Details", Component: <EditCourseDetails /> },
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
      id
      name
      lessonPlan {
        id
        ...EditCourseLessonPlan_lessonPlan
      }
    }
  `,
});
