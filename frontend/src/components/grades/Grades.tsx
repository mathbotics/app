import React, { useState } from 'react';
import { Typography, Button, Alert, Layout, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import { getRootQueryDataID } from '../../graphql/relay';
import { LessonsPageQuery } from '../../pages/LessonsPage';
import GradesTable from './GradesTable';
import { Lessons_lessons } from '../lessons/__generated__/Lessons_lessons.graphql';

const { Title } = Typography;

type Props = { lessons: Lessons_lessons };
enum PageState {
  Default, // Initial/Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError,
}
const Lessons = ({ lessons }: Props): JSX.Element => {
  const [pageState, setPageState] = useState<PageState>(PageState.Default);
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      {/* OnCreateLessonError - Attempt to create a lesson went wrong :( */}
      {pageState === PageState.CreateLessonError && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Unable to create lesson"
          closable
          showIcon
          type="error"
        />
      )}

      {/* OnCreateLessonSuccess - Attempt to create a lesson was succesful :) */}
      {pageState === PageState.CreateLessonSuccess && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Successfully created a lesson"
          closable
          showIcon
          type="success"
        />
      )}

      {/* Lessons header
        Idea: this can eventually become a banner or somethign less
        boring than what we have now?... just an idea
      */}
      <Header onAddLesson={() => setPageState(PageState.CreateLessonIntent)} />

      {/* Lessons table */}
      <GradesTable lessons={lessons} />

      {/* OnCreateLessonIntent - Someone clicked a button to create a lessons */}
      {/* {pageState === PageState.CreateLessonIntent && (
        <CreateLessonModal
          title="Create a lesson"
          rootDataID={getRootQueryDataID(LessonsPageQuery, {})}
          visible={pageState === PageState.CreateLessonIntent}
          onSubmitSuccess={() => setPageState(PageState.CreateLessonSuccess)}
          onSubmitError={(e: Error) => {
            console.error(e);
            setPageState(PageState.CreateLessonError);
          }}
          onCancel={() => setPageState(PageState.Default)}
        />
      )} */}
    </Layout>
  );
};


const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type HeaderProps = { onAddLesson: () => void };
const Header = ({ onAddLesson }: HeaderProps): JSX.Element => (
  <HeaderWrappper>
    <Title level={3} style={{ fontWeight: 700 }}>
     Grades
    </Title>
    {/* <Tooltip title="Add a lesson">
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        htmlType="submit"
        size="large"
        onClick={() => onAddLesson()}
      />
    </Tooltip> */}
  </HeaderWrappper>
  );

export default createFragmentContainer(Lessons, {
  lessons: graphql`
    fragment Lessons_lessons on Query {
      ...LessonsTable_lessons
    }
  `,
});