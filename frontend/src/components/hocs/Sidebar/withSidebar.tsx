import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  LockOutlined,
  BookOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import QueryLookupRenderer from "relay-query-lookup-renderer";

import { withSidebar_viewer } from "./__generated__/withSidebar_viewer.graphql";
import { withSidebarQueryResponse } from "./__generated__/withSidebarQuery.graphql";
import { environment } from "../../../graphql/relay";
import { AppLogo } from "../../icons";

const { Sider, Content } = Layout;

const Logo = styled.div`
  height: 32px;
  color: white;
  margin: 16px;
`;

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
    case "Admin":
      return [
        { name: "Dashboard", path: "", icon: <DashboardOutlined /> },
        { name: "Admin", path: "admin", icon: <LockOutlined /> },
        { name: "Lessons", path: "lessons", icon: <AppstoreOutlined /> },
        { name: "Courses", path: "courses", icon: <BookOutlined /> },
      ];
    case "Instructor":
      return [
        { name: "Dashboard", path: "", icon: <DashboardOutlined /> },
        { name: "Courses", path: "courses", icon: <BookOutlined /> },
      ];
    case "Student":
      return [
        { name: "Dashboard", path: "", icon: <DashboardOutlined /> },
        { name: "Courses", path: "courses", icon: <BookOutlined /> },
      ];
    default:
      return [{ name: "Dashboard", path: "", icon: <DashboardOutlined /> }];
  }
};

const Sidebar = createFragmentContainer(
  ({ viewer, component: Component }: Props) => {
    const history = useHistory();

    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    const [items, setMenuItems] = React.useState<Array<SidebarItem>>([]);

    useEffect(() =>
      setCollapsed(localStorage.getItem("collapsed") == "true" ?? true)
    );

    viewer && items.length === 0 && setMenuItems(menuItemsForViewer(viewer));

    const selectedKey = () => {
      const [, path] = window.location.pathname.split("/");
      return items.findIndex((item) => item.path === path);
    };

    const onClickMenuItem = (item: SidebarItem) => {
      history.push(`/${item.path}`);
    };

    return (
      <Layout style={{ minHeight: "100%" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            localStorage.setItem("collapsed", (!collapsed).toString());
            setCollapsed(!collapsed);
          }}
        >
          <div style={{ textAlign: "center", margin: "10px auto" }}>
            <AppLogo height={collapsed ? "50px" : "100px"} />
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

            <Menu.Item
              onClick={() => console.log("Need log out mutation here")}
            >
              <LogoutOutlined style={{ fontWeight: "bold" }} />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "16px 16px" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: 360,
                overflowY: "auto",
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
      }
    `,
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
