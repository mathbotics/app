import React, { useState } from "react";
import { Layout, Menu, Tooltip, Typography, Result, Button } from "antd";
import { PlusOutlined, BookOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Slide from "./Slide";
import { SlidesSidebar_lesson } from "./__generated__/SlidesSidebar_lesson.graphql";

const MenuItem = styled(Menu.Item)`
  width: 100% !important;
  height: 100% !important;
  padding: 5px 15px !important;
`;

const SlideCard = styled(Layout.Content)`
  height: 250px;
  background-color: white;
  border: 1.35px solid #ccc;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    color: #40a9ff;
    border: 1.35px solid #40a9ff;
    cursor: pointer;
  }
`;

type SidebarHeaderProps = {
  title: string;
};
const SidebarHeader = ({ title }: SidebarHeaderProps) => (
  <Tooltip title={title}>
    <p
      style={{
        fontSize: 18,
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}
    >
      <BookOutlined /> {title}
    </p>
  </Tooltip>
);

const CreateSlideCard = (props: any) => {
  return (
    <Tooltip title="Create a slide">
      <SlideCard>
        <PlusOutlined style={{ fontSize: "40px" }} />
      </SlideCard>
    </Tooltip>
  );
};

export type SlideMenuItem = {
  id: string;
  component: JSX.Element;
};

const { Sider, Content } = Layout;
type Props = {
  lesson: SlidesSidebar_lesson;
  children?: JSX.Element | false;
  onCreate: () => void;
  onEdit: (id: string) => void;
};
const SlidesSidebar = ({ children, lesson, onCreate, onEdit }: Props) => {
  const [selected, setSelected] = useState<number>(-1);
  return (
    <Layout style={{ height: "94vh" }}>
      <Sider
        width={400}
        theme="light"
        style={{ height: "100%", overflow: "auto" }}
      >
        <SidebarHeader title={lesson.title} />
        <Menu
          defaultSelectedKeys={[selected.toString()]}
          mode="inline"
          style={{ padding: "0px !important" }}
        >
          {/* This is the add slide which should always show up on top */}
          <MenuItem key={-1} onClick={() => onCreate()}>
            <CreateSlideCard />
          </MenuItem>

          {/* This is the rest of the slides */}
          {lesson.slides.map((slide, index) => (
            <MenuItem key={index} onClick={() => onEdit(slide.id)}>
              <Slide preview slide={slide} />
            </MenuItem>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "16px 16px"
          }}
        >
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {selected === -1 && (
              <Result
                icon={<SmileOutlined />}
                title="Get started by creating a slide!"
              />
            )}
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default createFragmentContainer(SlidesSidebar, {
  lesson: graphql`
    fragment SlidesSidebar_lesson on Lesson {
      title
      slides {
        id
        ...Slide_slide
      }
    }
  `
});
