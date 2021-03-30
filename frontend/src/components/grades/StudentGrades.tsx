import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import StudentGradesTable from './StudentGradesTable';
import { StudentGrades_lessons } from './__generated__/StudentGrades_lessons.graphql';
import { StudentGrades_grades } from './__generated__/StudentGrades_grades.graphql';
import { StudentGrades_course } from './__generated__/StudentGrades_course.graphql';

const { Title } = Typography;

type Props = { 
  lessons: StudentGrades_lessons, 
  course: StudentGrades_course;
  grades: StudentGrades_grades 
};
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const StudentGrades = ({ lessons, course, grades }: Props): JSX.Element => (
  <Layout style={{ backgroundColor: 'white' }}>
    <Header />

    {/* Lessons table */}
    <StudentGradesTable lessons={lessons} course={course} grades ={grades}/>
  </Layout>
);

const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type HeaderProps = { onAddLesson: () => void };
const Header = (): JSX.Element => (
  <HeaderWrappper>
    <Title level={3} style={{ fontWeight: 700 }}>
      Grades
    </Title>
  </HeaderWrappper>
);

export default createFragmentContainer(StudentGrades, {
  lessons: graphql`
    fragment StudentGrades_lessons on Query {
      ...StudentGradesTable_lessons
    }
  `,
  course: graphql`
    fragment StudentGrades_course on Query {
      ...StudentGradesTable_course
    }
  `,
  grades: graphql`
    fragment StudentGrades_grades on Query {
      ...StudentGradesTable_grades
    }
  `,
});
