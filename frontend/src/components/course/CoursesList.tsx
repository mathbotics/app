import React from "react";

import { Layout } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { CoursesList_courses } from "./__generated__/CoursesList_courses.graphql";
import { CourseCard } from "./CourseCard";
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

type Props = {
  courses: CoursesList_courses;
};
const CoursesList = ({ courses }: Props) => {
  const courseList = courses.courses;
  console.log(
    courses.courses.map((course) =>
      course.instructors.map((instructor) => console.log(instructor.id))
    )
  );
  return (
    <Wrapper>
      {courseList
        // .filter((course) => course.lessonPlan.lessons.length > 0)
        .map((course) => (
          <CardWrapper>
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              suggestedLevel={course.suggestedLevel}
              lesson_count={course.lessonPlan.lessons.length}
            />
          </CardWrapper>
        ))}
    </Wrapper>
  );
};
export default createFragmentContainer(CoursesList, {
  courses: graphql`
    fragment CoursesList_courses on Query {
      courses {
        id
        name
        suggestedLevel
        instructors {
          id
        }
        lessonPlan {
          lessons {
            title
          }
        }
      }
    }
  `,
});
