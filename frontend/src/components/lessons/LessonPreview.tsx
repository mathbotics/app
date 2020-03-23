import React from "react";
import { Button, Layout, Tooltip } from "antd";
import { ClockCircleOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { LessonPreview_lesson } from "./__generated__/LessonPreview_lesson.graphql";

const LessonPreviewWrapper = styled(Layout.Content)`
  height: auto;
  width: 400px;
  border: 1px solid #ccc;
  margin: 20px;
  :hover {
    color: inherit;
  }
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          flexDirection: "column",
          padding: "15px 25px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Tooltip title={title}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 700,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {title}
            </h1>
          </Tooltip>
          <Button style={{ border: "none" }} onClick={onClick}>
            <EditOutlined />
          </Button>
        </div>
        <p>
          <b>Suggested grade level:</b> 8th grade
        </p>
        <p>
          <ClockCircleOutlined /> 15min
        </p>

        <p>Slides: 0</p>
      </div>
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
