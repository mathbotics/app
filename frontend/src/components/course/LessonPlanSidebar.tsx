import React, { useState } from "react";
import { Layout, Menu, Tooltip } from "antd";
import { PlusOutlined, BookOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { LessonPlanSidebar_lessons } from "./__generated__/LessonPlanSidebar_lessons.graphql";

const MenuItem = styled(Menu.Item)`
  width: 100% !important;
  height: 100% !important;
  padding: 5px 15px !important;
  background-color: #ffffff !important;
`;

const SlideCard = styled(Layout.Content)`
  height: 190px;
  background-color: white;
  border-radius: 5px;
  font-weight: 600;
  color: #646464;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    color: #40a9ff;
    border: 1px solid #40a9ff;
    cursor: pointer;
  }
`;

export type SlideMenuItem = {
  id: string;
  component: JSX.Element;
};

const { Sider, Content } = Layout;
type Props = {
  lessons: LessonPlanSidebar_lessons;
  // onCreate: () => void;
  // onEdit: (id: string) => void;
};
const LessonPlanSidebar = ({ lessons }: Props) => {
  // const [selected, setSelected] = useState<string | undefined>(
  //   lessons.[0]?.id
  // );

  return (
    <Sider width={300} theme="light" style={{ overflow: "auto" }}>
      {/* <Menu defaultSelectedKeys={[selected?.toString() ?? ""]} mode="inline">
      {lessons.((lesson, index: number) => (
          <MenuItem
            key={index}
            onClick={() => {
              onEdit(slide.id);
              setSelected(slide.id);
            }}
          >
            <div style={{ display: "flex" }}>
              <h1
                style={{
                  margin: "auto",
                  paddingRight: "20px",
                  fontWeight: "bolder",
                }}
              >
                {index + 1}
              </h1>
              <SlideCard>
                <Slide preview selected={slide.id === selected} slide={slide} />
              </SlideCard>
            </div>
          </MenuItem>
        ))} */}{" "}
      */}
      {/* {/* </Menu> */}
    </Sider>
  );
};

export default createFragmentContainer(LessonPlanSidebar, {
  lessons: graphql`
    fragment LessonPlanSidebar_lessons on Lesson {
      title
      slides {
        id
        ...Slide_slide
      }
    }
  `,
});
