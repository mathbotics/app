import React from "react";
import { Button, Layout, Tooltip } from "antd";
import { ClockCircleOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPreview_lesson } from "./__generated__/LessonPreview_lesson.graphql";

const LessonPreviewWrapper = styled(Layout.Content)`
  height: auto;
  min-width: 400px;
  max-width: 400px;
  border: 1px solid #ccc;
  margin: 20px;
  transition: all 0.15s ease-in-out;
  :hover {
    color: inherit;
    transform: scale(1.02);
  }
`;

const LessonPreviewCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding: 15px 25px;
  height: 200px;
`;

const LessonPreviewCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 10px;
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
        <LessonPreviewCardHeader>
          <Tooltip title={title}>{title}</Tooltip>
          <Tooltip title={"Edit lesson"}>
            <Button
              style={{ border: "none", background: "transparent" }}
              onClick={() => onClick(id)}
            >
              <EditOutlined />
            </Button>
          </Tooltip>
        </LessonPreviewCardHeader>
        <Tooltip title={"Recommended grade level for this lesson"}>
          <p>
            <b>Suggested grade level:</b> 8th grade
          </p>
        </Tooltip>
        <Tooltip title={`Lesson completion time`}>
          <p>
            <ClockCircleOutlined /> 15min
          </p>
        </Tooltip>
        <p>Slides: 0</p>
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
