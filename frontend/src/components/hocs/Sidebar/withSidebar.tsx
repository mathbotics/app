import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  LockOutlined,
  BookOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { useHistory, Redirect } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import QueryLookupRenderer from 'relay-query-lookup-renderer';
import { withSidebar_viewer } from './__generated__/withSidebar_viewer.graphql';
import { withSidebarQueryResponse } from './__generated__/withSidebarQuery.graphql';
import { environment } from '../../../graphql/relay';
import { AppLogo } from '../../icons';
import { commit as commitLogOutMutation } from '../../../graphql/mutations/LogOutMutation';

const { Sider, Content } = Layout;

type SidebarItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const ViewerQuery = graphql`
  query withSidebarQuery {
    viewer {
      ...withSidebar_viewer
    }
  }
`;

type Props = {
  viewer: withSidebar_viewer | null | undefined;
  component: React.FC;
};

const menuItemsForViewer = ({ role }: withSidebar_viewer) => {
  
  switch (role) {
    case 'Admin':
      return [
        { name: 'Dashboard', path: '', icon: <DashboardOutlined /> },
        { name: 'Admin', path: 'admin', icon: <LockOutlined /> },
        { name: 'Lessons', path: 'lessons', icon: <AppstoreOutlined /> },
      ];
    case 'Instructor':
      return [
        { name: 'Dashboard', path: '', icon: <DashboardOutlined /> },
        { name: 'Courses', path: 'courses', icon: <BookOutlined /> },
        {
          name: 'Gradebook',
          path: 'gradebook',
          icon: <SolutionOutlined />,
        },
      ];
    case 'Student':
      return [
        { name: 'Dashboard', path: '', icon: <DashboardOutlined /> },
        { name: 'Courses', path: 'courses', icon: <BookOutlined /> },
        { name: 'Grades', path: 'grades/student', icon: <SolutionOutlined /> },
      ];
    default:
      return [{ name: 'Dashboard', path: '', icon: <DashboardOutlined /> }];
  }
};

const Sidebar = createFragmentContainer(
  ({ viewer, component: Component }: Props) => {
    const history = useHistory();

    const instructorId = viewer?.id
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [items, setMenuItems] = React.useState<Array<SidebarItem>>([]);

    useEffect(
      () => setCollapsed(localStorage.getItem('collapsed') === 'true' ?? true),
      [],
    );

    viewer && items.length === 0 && setMenuItems(menuItemsForViewer(viewer));

    const selectedKey = () => {
      const [, path] = window.location.pathname.split('/');
      return items.findIndex((item) => item.path === path);
    };

    const onClickMenuItem = (item: SidebarItem) => {
      if(item.path == 'gradebook'){
        //passes instructor id. 
        //TODO: is it ok to pass viewer id here and have it on path?
        history.push(`/${item.path}/${viewer!.id}`)
      }
      else{
        history.push(`/${item.path}`);
      }      
    };

    function logOut() {
      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      history.push('/login');
      commitLogOutMutation(logOutSuccess, logOutError);
    }

    function logOutSuccess() {
      console.log('user logged out finally');
      history.push('/login');
    }

    function logOutError() {
      console.log('Error logging out');
    }
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            localStorage.setItem('collapsed', (!collapsed).toString());
            setCollapsed(!collapsed);
          }}
        >
          <div style={{ textAlign: 'center', margin: '10px auto' }}>
            <AppLogo height={collapsed ? '50px' : '100px'} />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[String(selectedKey())]}
            mode="inline"
          >
            {items.map((item, i) => (
              <Menu.Item onClick={() => onClickMenuItem(item)} key={i}>
                {item.icon}
                <span>{item.name}</span>
              </Menu.Item>
            ))}

            <Menu.Item onClick={() => logOut()}>
              <LogoutOutlined style={{ fontWeight: 'bold' }} />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px 16px' }}>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
                overflowY: 'auto',
              }}
            >
              <Component />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  },
  {
    viewer: graphql`
      fragment withSidebar_viewer on User {
        role: __typename
        id
      }
    `,
  },
);

export default (component: React.FC) => () => (
  <QueryLookupRenderer
    lookup
    environment={environment}
    query={ViewerQuery}
    variables={{}}
    render={(queryResponse: {
      props?: withSidebarQueryResponse;
      error?: Error;
    }) => {
      if (queryResponse.error) {
        return <Redirect to="/login" />;
      }
      return (
        <Sidebar viewer={queryResponse?.props?.viewer} component={component} />
      );
    }}
  />
);
