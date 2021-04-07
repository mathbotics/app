import React, { useState } from 'react';
import { Typography, Layout, Menu, Dropdown, message } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import StudentGradesTable from './StudentGradesTable';
import { StudentGradesPageQueryResponse } from '../../pages/__generated__/StudentGradesPageQuery.graphql';
import { DownOutlined } from '@ant-design/icons';
import { StudentGradesPageQuery } from '../../pages';

const { Title } = Typography;

let studentGradeInfo : StudentGradesPageQueryResponse;

type Props = { 
  studentGradesQuery: StudentGradesPageQueryResponse;
};
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const StudentGrades = ({ studentGradesQuery}: Props): JSX.Element => (
  <Layout style={{ backgroundColor: 'white' }}>
    <Header courseName={studentGradesQuery.studentGradesQuery![0]!.course?.name}/>

    {/* Lessons table */}
    <StudentGradesTable studentGradesQuery = {studentGradesQuery.studentGradesQuery![0]}/>
  </Layout>
);


const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type HeaderProps = { onAddLesson: () => void };
const Header = (courseName:any): JSX.Element => (
  <HeaderWrappper>
    <Title level={3} style={{ fontWeight: 700 }}>
      Grades for {courseName['courseName']}
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
