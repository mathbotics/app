import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import StudentGradesTable from './StudentGradesTable';
import { StudentGradesPageQueryResponse } from '../../pages/__generated__/StudentGradesPageQuery.graphql';

const { Title } = Typography;

type Props = { 
  studentGradesQuery: StudentGradesPageQueryResponse;
};
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const StudentGrades = ({ studentGradesQuery }: Props): JSX.Element => (
  <Layout style={{ backgroundColor: 'white' }}>
    <Header />

    {/* Lessons table */}
    <StudentGradesTable studentGradesQuery = {studentGradesQuery}/>
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
  students: graphql`
    fragment StudentGrades_students on Query {
      ...StudentGradesTable_students
    }
  `,
  grades: graphql`
    fragment StudentGrades_grades on Query {
      ...StudentGradesTable_grades
    }
  `,
});
