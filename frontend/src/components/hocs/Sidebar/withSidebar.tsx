import React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import QueryLookupRenderer from "relay-query-lookup-renderer";

import { withSidebar_viewer } from "./__generated__/withSidebar_viewer.graphql";
import { withSidebarQueryResponse } from "./__generated__/withSidebarQuery.graphql";
import { environment } from "../../../graphql/relay";

const { Sider, Content } = Layout;

const Logo = styled.div`
  height: 32px;
  color: white;
  margin: 16px;
  overflow-x: hidden;
`;

type SidebarItem = {
  name: string;
  path: string;
  iconType: string;
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
    case "Admin":
      return [
        { name: "Dashboard", path: "", iconType: "dashboard" },
        { name: "Admin", path: "admin", iconType: "lock" }
      ];
    case "Instructor":
      return [
        { name: "Dashboard", path: "", iconType: "dashboard" },
        { name: "Courses", path: "courses", iconType: "book" }
      ];
    case "Student":
      return [
        { name: "Dashboard", path: "", iconType: "dashboard" },
        { name: "Courses", path: "courses", iconType: "book" }
      ];
    default:
      return [{ name: "Dashboard", path: "", iconType: "dashboard" }];
  }
};

const Sidebar = createFragmentContainer(
  ({ viewer, component: Component }: Props) => {
    const history = useHistory();

    const [collapsed, setCollapsed] = React.useState(false);
    const [items, setMenuItems] = React.useState<Array<SidebarItem>>([]);

    viewer && items.length === 0 && setMenuItems(menuItemsForViewer(viewer));

    const selectedKey = () => {
      const [, path] = window.location.pathname.split("/");
      return items.findIndex(item => item.path === path);
    };

    const onClickMenuItem = (item: SidebarItem) => {
      history.push(`/${item.path}`);
    };

    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Logo>
              <h1 style={{ color: "white" }}>Mathbotics</h1>
            </Logo>
            <Menu
              theme="dark"
              defaultSelectedKeys={[String(selectedKey())]}
              mode="inline"
            >
              {items.map((item, i) => (
                <Menu.Item onClick={() => onClickMenuItem(item)} key={i}>
                  <Icon type={item.iconType} />
                  <span>{item.name}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "16px 16px" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Component />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  },
  {
    viewer: graphql`
      fragment withSidebar_viewer on User {
        role: __typename
      }
    `
  }
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
