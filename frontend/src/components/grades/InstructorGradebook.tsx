import React from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import InstructorGradebookTable from './InstructorGradebookTable';
import { InstructorGradebook_lessons } from './__generated__/InstructorGradebook_lessons.graphql';
import { InstructorGradebook_course } from './__generated__/InstructorGradebook_course.graphql';

const { Title } = Typography;

type Props = {
  lessons: InstructorGradebook_lessons;
  course: InstructorGradebook_course;
};

const InstructorGradebook = ({ lessons, course }: Props): JSX.Element => (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header />

      {/* Lessons table */}
      <InstructorGradebookTable lessons={lessons} course={course} />
    </Layout>
  );

const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = (): JSX.Element => (
  <HeaderWrappper>
    <Title level={3} style={{ fontWeight: 700 }}>
      GradeBook
    </Title>
  </HeaderWrappper>
);

export default createFragmentContainer(InstructorGradebook, {
  lessons: graphql`
    fragment InstructorGradebook_lessons on Query {
      ...InstructorGradebookTable_lessons
    }
  `,
  course: graphql`
    fragment InstructorGradebook_course on Query {
      ...InstructorGradebookTable_course
    }
  `,
});
