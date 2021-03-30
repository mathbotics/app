import React from 'react';
import { Typography, Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import InstructorGradebookTable from './InstructorGradebookTable';
import { InstructorGradebook_courses } from './__generated__/InstructorGradebook_courses.graphql';
import { InstructorGradebookPageQueryResponse } from '../../pages/__generated__/InstructorGradebookPageQuery.graphql';

const { Title } = Typography;

type Props = {
  instructorGradeBookQuery: InstructorGradebookPageQueryResponse;
};

const InstructorGradebook = ({ instructorGradeBookQuery }: Props): JSX.Element => (
  <Layout style={{ backgroundColor: 'white' }}>
    <Header />

    {/* Lessons table */}
    <InstructorGradebookTable instructorGradeBookQuery={instructorGradeBookQuery}  />
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
  // lessons: graphql`
  //   fragment InstructorGradebook_lessons on Query {
  //     ...InstructorGradebookTable_lessons
  //   }
  // `,
  // course: graphql`
  //   fragment InstructorGradebook_course on Query {
  //     ...InstructorGradebookTable_course
  //   }
  // `,
  courses: graphql`
  fragment InstructorGradebook_courses on Course {
    id
    name
    lessons {
      id
      title
    }
    students {
      firstName
      lastName
      grades{
        lessonId
        courseId
        grade
      }
    }
  }
`,
  grades: graphql`
    fragment InstructorGradebook_grades on Query {
      ...InstructorGradebookTable_grades
    }
  `,
});
