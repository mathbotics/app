import React from 'react';
import { Typography, Button } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { ExportOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Course_course } from './__generated__/Course_course.graphql';
import { LessonCard } from '../lessons/LessonCard';

const { Title } = Typography;

type Props = { course: Course_course };
const Course = ({ course }: Props) => {
  const history = useHistory();

  return (
    <>
      <Banner>
        <Title level={1} style={{ fontWeight: 800, color: 'white' }}>
          {course.name}
        </Title>
        <Title
          level={3}
          style={{ fontWeight: 500, color: 'white', margin: '5px 0px' }}
        >
          {course.description}
        </Title>

        <h1 style={{ fontWeight: 400, color: 'white', margin: '5px 0px' }}>
          {course.lessonPlan.lessons.length}
          {' '}
          Lessons
        </h1>

        <Button
          onClick={() =>
            course.lessonPlan.lessons.length > 0 &&
            history.push(
              `/courses/${course.id}/lessons/${course.lessonPlan.lessons[0].id}`,
            )}
          size="large"
          type="primary"
          icon={<ExportOutlined style={{ fontWeight: 700 }} />}
          style={{
            fontWeight: 700,
            marginTop: '20px',
            border: '1px solid #4ca7ff',
            boxShadow:
              '0 10px 15px -3px rgba(57, 129, 181, 0.31),0 4px 6px -2px rgba(120, 157, 195, 0.08)',
          }}
        >
          Start Course
        </Button>
      </Banner>

      <LessonsWrapper>
        {course.lessonPlan.lessons.map((lesson) => (
          <LessonCardWrapper key={lesson.id}>
            <LessonCard
              id={lesson.id}
              courseId={course.id}
              title={lesson.title}
              slideCount={lesson.slides.length}
              linkLesson
            />
          </LessonCardWrapper>
        ))}
      </LessonsWrapper>
    </>
  );
};
const LessonsWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 520px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const LessonCardWrapper = styled.div`
  width: 100%;
  margin: 5px 0px;
`;

const Banner = styled.div`
  background-color: #198fff;
  width: 100%;
  height: 270px;
  border-radius: 5px;
  padding: 40px 70px;
  transition: all 0.15s ease-in-out;

  :hover {
    box-shadow: 0 10px 15px -3px rgba(57, 129, 181, 0.31),
      0 4px 6px -2px rgba(120, 157, 195, 0.08);
    cursor: pointer;
  }
`;

export default createFragmentContainer(Course, {
  course: graphql`
    fragment Course_course on Course {
      id
      name
      description
      lessonPlan {
        id
        lessons {
          id
          title
          slides {
            id
          }
        }
      }
    }
  `,
});
