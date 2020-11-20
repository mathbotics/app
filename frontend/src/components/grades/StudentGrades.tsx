import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import StudentGradesTable from './StudentGradesTable';
import { StudentGrades_lessons } from './__generated__/StudentGrades_lessons.graphql';

const { Title } = Typography;

type Props = { lessons: StudentGrades_lessons };
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const StudentGrades = ({ lessons }: Props): JSX.Element => (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header/>

      {/* Lessons table */}
      <StudentGradesTable lessons={lessons} />
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
});
