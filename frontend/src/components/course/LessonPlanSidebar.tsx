import React, { useState } from "react";
import { Layout, Menu, Tooltip, Typography } from "antd";
import { PlusOutlined, BookOutlined, CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { commit as commitUpdateOneLessonPlanMutation } from "../../graphql/mutations/UpdateOneLessonPlanMutation";
import { LessonPlanSidebar_lessonPlan } from "./__generated__/LessonPlanSidebar_lessonPlan.graphql";

import { LessonCard } from "../lessons/LessonCard";

const { Title } = Typography;

const MenuItem = styled(Menu.Item)`
  width: 100% !important;
  height: 126px !important;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;
  padding: 0px !important;
  margin: 10px 0px;
`;

export type SlideMenuItem = { id: string; component: JSX.Element };

const { Sider, Content } = Layout;
type Props = { lessonPlan: LessonPlanSidebar_lessonPlan };
const LessonPlanSidebar = ({ lessonPlan }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(
    lessonPlan.lessons?.[0]?.id
  );

  const removeLessonFromLessonPlan = (id: string) => {
    commitUpdateOneLessonPlanMutation(
      {
        data: { lessons: { disconnect: [{ id }] } },
        where: { id: lessonPlan.id },
      },
      () => console.log("Success"),
      (e) => console.log("Error " + e)
    );
  };

  const { lessons } = lessonPlan;

  return (
    <Sider
      width={300}
      theme="light"
      style={{
        overflow: "auto",
        height: "100%",
        borderRadius: "5px",
        marginRight: "20px",
      }}
    >
      {lessonPlan.lessons.length > 0 && (
        <Menu defaultSelectedKeys={[selected?.toString() ?? ""]} mode="inline">
          {lessons.map((lesson, index) => (
            <MenuItem
              key={lesson.id}
              onClick={() => removeLessonFromLessonPlan(lesson.id)}
              style={{ display: "flex" }}
            >
              <h1
                style={{
                  margin: "auto",
                  paddingRight: "15px",
                  fontWeight: 800,
                  backgroundColor: "white",
                  height: "100%",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {index + 1}
              </h1>
              <LessonCard
                id={lesson.id}
                title={lesson.title}
                slideCount={lesson.slides.length}
              />
            </MenuItem>
          ))}
        </Menu>
      )}
    </Sider>
  );
};

export default createFragmentContainer(LessonPlanSidebar, {
  lessonPlan: graphql`
    fragment LessonPlanSidebar_lessonPlan on LessonPlan {
      id
      lessons {
        id
        title
        slides {
          id
        }
      }
    }
  `,
});
