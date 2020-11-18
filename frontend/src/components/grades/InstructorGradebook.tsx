import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import InstructorGradebookTable from './InstructorGradebookTable';
import { InstructorGradebook_lessons } from './__generated__/InstructorGradebook_lessons.graphql';

const { Title } = Typography;

type Props = { lessons: InstructorGradebook_lessons };
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const InstructorGradebook = ({ lessons }: Props): JSX.Element => {

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header/>

      {/* Lessons table */}
      <InstructorGradebookTable lessons={lessons} />
    </Layout>
  );
};


const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type HeaderProps = { onAddLesson: () => void };
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
});
