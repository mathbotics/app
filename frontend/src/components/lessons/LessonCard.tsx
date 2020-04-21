import React from "react";
import styled from "styled-components";

import { ExportOutlined, EditOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import { useHistory } from "react-router-dom";

const Card = styled.div`
  border-radius: 5px;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease-in-out;
  border: 0.5px solid #e0e9f3;
  :hover {
    box-shadow: 0 10px 15px -3px rgba(57, 129, 181, 0.31),
      0 4px 6px -2px rgba(120, 157, 195, 0.08);
    cursor: pointer;
  }
`;

const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const CardDescription = styled.div`
  font-size: 20px;
  color: #676767;
  font-weight: 600;
  margin-top: 25px;
`;

const CourseLevel = styled.div`
  border-radius: 50px;
  padding: 5px 15px;
  background-color: #198fff14;
  color: #0a7ce8;
  font-weight: bold;
  font-size: 13px;
  width: fit-content;
`;

const CardFooter = styled.div`
  margin: 16px 0px 0px 0px;
`;

const CardSlideCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const EditButton = styled.div`
  :hover {
    color: #1890ff;
  }
`;

type Props = {
  id: string;
  title: string;
  description?: string;
  suggestedLevel?: string;
  slideCount?: number;
};
export const LessonCard = ({
  id,
  title,
  suggestedLevel,
  description,
  slideCount,
}: Props) => {
  let history = useHistory();
  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardTitle>{title}</CardTitle>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CourseLevel>{suggestedLevel} grade</CourseLevel>
        <CardFooter>
          <CardSlideCount>
            <ExportOutlined style={{ marginRight: "10px" }} />
            {slideCount} Slides
          </CardSlideCount>
        </CardFooter>
      </div>
    </Card>
  );
};
