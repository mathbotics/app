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
    <Header />

    {/* Lessons table */}
    <StudentGradesTable studentGradesQuery = {studentGradesQuery}/>
  </Layout>
);


const onClick = ({ key }) => {
  message.info(`You selected Course ${key}`);
};

const menu =  <Menu onClick={onClick}>
  {/* {studentGradesQuery![0]!.course!.lessons.map((course) => (
         <Menu.Item key ={course.id}>course.id</Menu.Item>
      ))} */}
      <Menu.Item key="1">Course 1</Menu.Item>
    <Menu.Item key="2">Course 2</Menu.Item>
    <Menu.Item key="3">Course 3</Menu.Item>
  </Menu>

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
    
    <Dropdown overlay={menu}>
  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    Grades by Course <DownOutlined />
  </a>
</Dropdown>
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
