import React, { useEffect, useState } from 'react';
import { Typography, Layout, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useHistory } from 'react-router-dom';
import { Courses_query } from './__generated__/Courses_query.graphql';
import CoursesList from './CoursesList';
import CreateCourseModal from './CreateCourseModal';
import { getRootQueryDataID } from '../../graphql/relay';

import { CoursesPageQuery } from '../../pages/CoursesPage';

const { Title } = Typography;

enum PageState {
  Default,
  CreateCourseIntent,
  CreateCourseSuccess,
  CreateCourseError,
}
type Props = { query: Courses_query, retry };
const Courses = ({ query, retry }: Props) => {
  /*
  TODO
  history will probably be used in the future
  */
  // eslint-disable-next-line
  let history = useHistory();
  
  const [pageState, setPageState] = useState<PageState>(PageState.Default);
  
  console.log(query)
  
  return (
    <Layout style={{ backgroundColor: 'white', maxHeight: '95vh' }}>
      <HeaderWrapper>
        <Title level={3} style={{ fontWeight: 700 }}>
          Courses
        </Title>
        <Tooltip title="Add a course">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            htmlType="submit"
            size="large"
            onClick={() => setPageState(PageState.CreateCourseIntent)}
          />
        </Tooltip>
      </HeaderWrapper>

      <CreateCourseModal
        title="Create a Course"
        rootDataID={getRootQueryDataID(CoursesPageQuery, {})}
        visible={pageState === PageState.CreateCourseIntent}
        onSubmitSuccess={() => setPageState(PageState.CreateCourseSuccess)}
        onSubmitError={(e: Error) => {
          console.error(e);
          setPageState(PageState.CreateCourseError);
        }}
        onCancel={() => setPageState(PageState.Default)}
      />

      {/* Display list of courses */}
      <CoursesList retry={retry} courses={query} />
    </Layout>
  );
};

export default createFragmentContainer(Courses, {
  query: graphql`
    fragment Courses_query on Query {
      ...CoursesList_courses
    }
  `,
});

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;
