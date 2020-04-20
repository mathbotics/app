import React, { useState } from "react";
import { Typography, Layout, Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { Courses_courses } from "./__generated__/Courses_courses.graphql";
import CoursesList from "./CoursesList";
import { useHistory } from "react-router-dom";
import CreateCourseModal from "./CreateCourseModal";
import { getRootQueryDataID } from "../../graphql/relay";

import { CoursesPageQuery } from "../../pages/CoursesPage";

const { Title } = Typography;

enum PageState {
  Default,
  CreateCourseIntent,
  CreateCourseSuccess,
  CreateCourseError,
}
type Props = { courses: Courses_courses };
const Courses = ({ courses }: Props) => {
  let history = useHistory();
  const [pageState, setPageState] = useState<PageState>(PageState.Default);
  return (
    <Layout style={{ backgroundColor: "white", height: "95vh" }}>
      <HeaderWrappper>
        <Title level={3} style={{ fontWeight: 700 }}>
          Courses
        </Title>
        <Tooltip title={"Add a course"}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            htmlType="submit"
            size={"large"}
            onClick={() => setPageState(PageState.CreateCourseIntent)}
          />
        </Tooltip>
      </HeaderWrappper>

      <CreateCourseModal
        title="Create a Course"
        rootDataID={getRootQueryDataID(CoursesPageQuery, {})}
        visible={pageState === PageState.CreateCourseIntent}
        onSubmitSuccess={() => setPageState(PageState.CreateCourseSuccess)}
        onSubmitError={(e: Error) => {
          console.error(e);
          setPageState(PageState.CreateCourseError);
        }}
        onCancel={() => setPageState(PageState.Default)}
      />

      <CoursesList courses={courses} />
    </Layout>
  );
};

export default createFragmentContainer(Courses, {
  courses: graphql`
    fragment Courses_courses on Query {
      ...CoursesList_courses
    }
  `,
});

const HeaderWrappper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;
