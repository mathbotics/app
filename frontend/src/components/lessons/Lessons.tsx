import React, { useState } from 'react';
import { Typography, Button, Alert, Layout, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { createFragmentContainer } from 'react-relay';
import { getRootQueryDataID } from '../../graphql/relay';
import { LessonsPageQuery } from '../../pages/LessonsPage';
import CreateLessonModal from './CreateLessonModal';
import DeleteLessonModal from './DeleteLessonModal';
import LessonsTable from './LessonsTable';
import { Lessons_lessons } from './__generated__/Lessons_lessons.graphql';

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
  const [deleteOneLesson, toggleDeleteOneLesson] = useState<boolean>(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('');
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
      <LessonsTable
        lessons={lessons}
        onClickRemove={(lessonId) => {
          setSelectedLessonId(lessonId);
          toggleDeleteOneLesson(!deleteOneLesson);
        }}
      />
      <DeleteLessonModal
        title="Delete Lesson"
        visible={deleteOneLesson}
        lessonId={selectedLessonId}
        onSubmitSuccess={() => window.location.reload()}
        onSubmitError={(e: Error) => console.error(e)}
        onCancel={() => toggleDeleteOneLesson(!deleteOneLesson)}
      />

      {/* OnCreateLessonIntent - Someone clicked a button to create a lessons */}
      {pageState === PageState.CreateLessonIntent && (
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
      )}
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
      Lessons
    </Title>
    <Tooltip title="Add a lesson">
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        htmlType="submit"
        size="large"
        onClick={() => onAddLesson()}
      />
    </Tooltip>
  </HeaderWrappper>
);

export default createFragmentContainer(Lessons, {
  lessons: graphql`
    fragment Lessons_lessons on Query {
      ...LessonsTable_lessons
    }
  `,
});
