import React from "react";
import { Button, Layout, Tooltip, Typography } from "antd";
import {
  FileTextOutlined,
  ClockCircleOutlined,
  EditOutlined
} from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPreview_lesson } from "./__generated__/LessonPreview_lesson.graphql";

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
        {/* Title of lessons */}
        <ContentWrapper style={{ display: "flex", alignItems: "center" }}>
          <FileTextOutlined style={{ marginRight: "10px", fontSize: "15px" }} />
          <Tooltip title={title}>
            <span
              style={{
                fontSize: "15px",
                width: "80%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontWeight: 600
              }}
            >
              {title}
            </span>
          </Tooltip>
        </ContentWrapper>

        {/* Suggested grade level */}
        <ContentWrapper>
          <Tooltip title={"Recommended grade level for this lesson"}>
            8th grade
          </Tooltip>
        </ContentWrapper>

        {/* Suggested completion time */}
        <ContentWrapper>
          <Tooltip title={`Suggested completion time`}>
            <ClockCircleOutlined /> 15min
          </Tooltip>
        </ContentWrapper>

        {/* Slide Count */}
        <ContentWrapper>0 Slides</ContentWrapper>
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

const ContentWrapper = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
const LessonPreviewWrapper = styled(Layout.Content)`
  margin: 5px 0px;
  transition: all 0.15s ease-in-out;
  width: 100%;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const LessonPreviewCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 100%;
`;
