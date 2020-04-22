import React from "react";

import { Layout, Result } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { CoursesList_courses } from "./__generated__/CoursesList_courses.graphql";
import CourseCard from "./CourseCard";
import styled from "styled-components";

const Wrapper = styled(Layout)`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CardWrapper = styled.div`
  min-width: 375px;
  max-width: 18%;
  margin: 10px;
`;

type Props = { courses: CoursesList_courses };
const CoursesList = ({ courses }: Props) => (
  <Wrapper>
    {courses.courses.length === 0 && (
      <Result
        style={{ margin: "auto" }}
        // @ts-ignore
        status={"404"}
        title="No courses found"
        subTitle="Looks like you have no courses!"
      />
    )}
    {courses.courses.map((course) => (
      <CardWrapper>
        <CourseCard key={course.id} course={course} />
      </CardWrapper>
    ))}
  </Wrapper>
);

export default createFragmentContainer(CoursesList, {
  courses: graphql`
    fragment CoursesList_courses on Query {
      courses(where: $where) {
        id
        ...CourseCard_course
      }
    }
  `,
});
