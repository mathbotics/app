import React, { useState } from 'react';
import { Typography, Layout, Tooltip, Button } from 'antd';
import { PlusOutlined, PropertySafetyFilled } from '@ant-design/icons';
import styled from 'styled-components';

import { createFragmentContainer, GraphQLTaggedNode } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks'; //new
import { useRelayEnvironment } from 'react-relay/hooks'; //new
import { graphql } from 'babel-plugin-relay/macro';

import { useHistory } from 'react-router-dom';
import { Courses_query } from './__generated__/Courses_query.graphql';

//import { Courses_user } from './__generated__/Courses_user.graphql';
import { CoursesUserQuery } from './__generated__/CoursesUserQuery.graphql'; //this was generated because of const UserQuery
import { CoursesList_user } from './__generated__/CoursesList_user.graphql'; //new

import CoursesList from './CoursesList';
import CreateCourseModal from './CreateCourseModal';
import { getRootQueryDataID } from '../../graphql/relay';

import { CoursesPageQuery } from '../../pages/CoursesPage';
//import { environment } from '../../graphql/relay';


const { Title } = Typography;

enum PageState {
  Default,
  CreateCourseIntent,
  CreateCourseSuccess,
  CreateCourseError,
}



type Props = { query: Courses_query };

type UserProp = { viewer: CoursesUserQuery };
//no viewer, second props... that is the original

const Courses = ({ query }: Props, { viewer }: UserProp) => {
  /*
  TODO
  history will probably be used in the future
  */
  // eslint-disable-next-line
  let history = useHistory();
  const [pageState, setPageState] = useState<PageState>(PageState.Default);

/* Data const with query info creation. */
const environment = useRelayEnvironment();

const UserQuery = graphql`
query CoursesUserQuery {
  viewer {
    ...CoursesList_user
  }
}
`; //need to find a way to make a constant with GraphQLTaggedNode

const variables = {
  
}; 

const options = {
  fetchPolicy: network-only, // no cached data mdoe.. Also to fix issue, I need to call a Network Type?
};

let data = useLazyLoadQuery<CoursesUserQuery>(UserQuery, variables, options ); //for some reason viewer is undefined... and crashes the app...
//what if the issue is about how or where I'm assigning data
//this has to be some runtime bs error...

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

      {/* loading query for the user below */}
          

      {/* Display list of courses */}
      <CoursesList courses={query} user={data?.viewer} />
    </Layout>
  );
};

//the user above is in that manner as an example of withSidebar.tsx

export default createFragmentContainer(Courses, {
  query: graphql`
    fragment Courses_query on Query {
      ...CoursesList_courses
    }
  `,
});

/*in case I need this above...

user: graphql`
    fragment Courses_user on User {
      ...CoursesList_user
    }
  `,
*/

/* User related query render stuff , issues with this thing below... */
/*
const UserQuery = graphql`
  query CoursesUserQuery {
    viewer {
      ...CoursesList_user
    }
  }
`;
*/



/*
const userRenderQuery = (queryResponse: { 
  error?: Error; 
  props?: CoursesUserQueryResponse; 
}) => {
  if (queryResponse.error) {
    console.log(queryResponse.error.message);
    return <div>{queryResponse.error.message}</div>;
  } else if (queryResponse.props) {
    console.log("user related props sucessfully retrieved");
    /* task for saving the result in viewer */
    /*
    setUserState(queryResponse.props?.viewer);
  }
  return (
  <CoursesList courses={query} user={queryResponse.props?.viewer} />
  );
}
*/

//try making a query on this manner
/*
  export const CoursePageQuery = graphql`
  query CoursePageQuery($where: CourseWhereUniqueInput!) {
    course(where: $where) {
      ...Course_course
    }
  }
`;
*/

/* 
const ViewerQuery = graphql`
  query withSidebarQuery {
    viewer {
      ...withSidebar_viewer
    }
  }
`;
*/

/*
const CoursePageUserQuery = graphql`
  query CoursePageUserQuery($where: UserWhereUniqueInput!) {
    user(where: $where) {
      __typename
    }
  }
`;
*/

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;
