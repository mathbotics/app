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

const CardFooter = styled.div`
  margin: 5px 0px 0px 0px;
  display: flex;
  alignitems: center;
  justify-content: flex-start;
`;

const CardSlideCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

type Props = {
  id: string;
  title: string;
  description?: string;
  slideCount?: number;
};
export const LessonCard = ({ id, title, description, slideCount }: Props) => {
  let history = useHistory();
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardFooter>
        {slideCount && (
          <CardSlideCount>
            <ExportOutlined style={{ margin: "0px 0px 0px 10px" }} />
            {slideCount} Slide{slideCount > 1 && "s"}
          </CardSlideCount>
        )}
      </CardFooter>
    </Card>
  );
};
