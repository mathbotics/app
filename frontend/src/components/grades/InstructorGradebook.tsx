import React, { useState } from 'react';
import { Typography, Layout, Dropdown, Menu, message } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import InstructorGradebookTable from './InstructorGradebookTable';
import { InstructorGradebookPageQueryResponse } from '../../pages/__generated__/InstructorGradebookPageQuery.graphql';
import { DownOutlined } from '@ant-design/icons';

const { Title } = Typography;

type Props = {
  instructorGradeBookQuery: InstructorGradebookPageQueryResponse;
};

const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstructorGradebook = ({ instructorGradeBookQuery }: Props)  => {

  const instructorGradeBookList = instructorGradeBookQuery.instructorGradeBookQuery;
  const [instructorGradeBookItem, setInstructorGradeBookItem] = useState<any>(instructorGradeBookQuery.instructorGradeBookQuery[0]);
  const [title, setTitle]  = useState<string>(instructorGradeBookQuery.instructorGradeBookQuery[0]?.name);

  const onClick = ({ item }) => {
    const key = item.props.index;
    setTitle(instructorGradeBookList[key]['name']);
    setInstructorGradeBookItem(instructorGradeBookList[key]);
  }

  const DropdownMenuGrades = (): JSX.Element => (
    <Menu onClick={event => onClick(event)}>
    {instructorGradeBookList.map((value, index:any) => (
           <Menu.Item key={index}>{value.name}</Menu.Item>
        ))}
    </Menu>
  )

  const Header = (): JSX.Element => (
    <HeaderWrappper>
      <Title level={3} style={{ fontWeight: 700 }}>
        GradeBook: {title}
      </Title>
      <Dropdown overlay={DropdownMenuGrades}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Grades by Course <DownOutlined />
        </a>
      </Dropdown>
    </HeaderWrappper>
  );

  return(
    <Layout style={{ backgroundColor: 'white' }}>
      <Header/>
      <InstructorGradebookTable instructorGradeBookQuery={instructorGradeBookItem}  />
    </Layout>
  )
};


export default createFragmentContainer(InstructorGradebook, {
  // courses: graphql`
  // fragment InstructorGradebook_courses on Course {
  //   id
  //   name
  //   lessons {
  //     id
  //     title
  //   }
  //   students {
  //     firstName
  //     lastName
  //     grades{
  //       lessonId
  //       courseId
  //       grade
  //     }
  //   }
  // }
  // `

//   grades: graphql`
//     fragment InstructorGradebook_grades on Query {
//       ...InstructorGradebookTable_grades
//     }
//   `,
});
