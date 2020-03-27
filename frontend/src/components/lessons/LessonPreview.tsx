import React from "react";
import { Button, Layout, Tooltip, Typography } from "antd";
import { ClockCircleOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPreview_lesson } from "./__generated__/LessonPreview_lesson.graphql";

const { Title } = Typography;

const LessonPreviewWrapper = styled(Layout.Content)`
  border: solid 1px #e8e9eb;
  background-color: #f9f9f9;
  margin: 5px 0px;
  transition: all 0.15s ease-in-out;
  width: 100%;
  :hover {
    cursor: pointer;
    color: inherit;
  }
`;

const LessonPreviewCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: row;
  align-items: center;
  padding: 5px 40px;
`;

type LessonPreviewProps = {
  lesson: LessonPreview_lesson;
  onClick: any;
};
const LessonPreview = ({
  lesson: { id, title },
  onClick
}: LessonPreviewProps) => {
  return (
    <LessonPreviewWrapper>
      <LessonPreviewCard>
        <div
          style={{
            width: "400px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          <Tooltip title={title}>
            <p style={{ margin: "0", fontWeight: 700 }}>{title}</p>
          </Tooltip>
        </div>
        <div
          style={{
            width: 250,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          <Tooltip title={"Recommended grade level for this lesson"}>
            <b>Suggested grade level:</b> 8th grade
          </Tooltip>
        </div>
        <div
          style={{
            width: 150,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          <Tooltip title={`Lesson completion time`}>
            <ClockCircleOutlined /> 15min
          </Tooltip>
        </div>
        <div
          style={{
            width: 150,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          0 Slides
        </div>
        <Tooltip title={"Edit lesson"}>
          <Button
            style={{ border: "none", background: "transparent" }}
            onClick={() => onClick(id)}
          >
            <EditOutlined />
          </Button>
        </Tooltip>
      </LessonPreviewCard>
    </LessonPreviewWrapper>
  );
};

export default createFragmentContainer(LessonPreview, {
  lesson: graphql`
    fragment LessonPreview_lesson on Lesson {
      id
      title
    }
  `
});
