import React, { useState } from "react";
import { Layout, Menu, Tooltip, Typography } from "antd";
import { PlusOutlined, BookOutlined, CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { LessonPlanSidebar_lessons } from "./__generated__/LessonPlanSidebar_lessons.graphql";

const { Title } = Typography;

const MenuItem = styled(Menu.Item)`
  width: 100% !important;
  height: 100% !important;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;
  :hover {
    box-shadow: 0 10px 15px -3px rgba(57, 129, 181, 0.31),
      0 4px 6px -2px rgba(120, 157, 195, 0.08);
  }
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

export type SlideMenuItem = { id: string; component: JSX.Element };

const { Sider, Content } = Layout;
type Props = {
  lessons: LessonPlanSidebar_lessons;
  // onCreate: () => void;
  // onEdit: (id: string) => void;
};
const LessonPlanSidebar = ({ lessons }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(
    lessons.lessons?.[0]?.id
  );

  return (
    <Sider
      width={300}
      theme="light"
      style={{
        overflow: "auto",
        padding: "30px",
        height: "100%",
        backgroundColor: "#198fff",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <Menu defaultSelectedKeys={[selected?.toString() ?? ""]} mode="inline">
        {/* {!lessons.lessons && (
        <MenuItem>
          <p>No lessons</p>
        </MenuItem>
      )} */}
      </Menu>
    </Sider>
  );
};

export default createFragmentContainer(LessonPlanSidebar, {
  lessons: graphql`
    fragment LessonPlanSidebar_lessons on LessonPlan {
      id
      lessons {
        id
        title
      }
    }
  `,
});
