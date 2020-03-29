import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { graphql } from "babel-plugin-relay/macro";

import { MultipleChoice, MultipleChoiceEdit } from "../block";
import { createFragmentContainer } from "react-relay";
import { SingleSlide_singleSlide } from "./__generated__/SingleSlide_singleSlide.graphql";

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: ${({ preview }: WrapperProps) =>
    preview ? "1px solid #7e7e7e" : "1px solid #ccc"};
  transition: all 0.15s ease-in-out;
  background-color: ${({ selected, preview }: WrapperProps) =>
    selected && preview && "#1990ff"};
  color: ${({ selected, preview }: WrapperProps) =>
    selected && preview && "white"};
  :hover {
    cursor: ${({ preview }: WrapperProps) => preview && "pointer"};
    border: ${({ preview }: WrapperProps) => preview && "1px solid #f3f3f3cc"};
    background-color: ${({ preview }: WrapperProps) => preview && "#1990ff"};
    color: ${({ preview }: WrapperProps) => preview && "white"};
  }
`;

type BlockComponent = React.ReactElement<
  typeof MultipleChoice | typeof MultipleChoiceEdit
>;
type Props = {
  singleSlide?: SingleSlide_singleSlide;
  Block?: BlockComponent;
  preview?: boolean;
  selected?: boolean;
  children?: ReactNode;
  style?: any;
};
const SingleSlide = ({ Block, preview, selected, children }: Props) => (
  <Wrapper preview={preview} selected={selected}>
    {!preview && (Block ?? "No block provided")}
    {preview && <FileImageOutlined style={{ fontSize: 50 }} />}
    {children}
  </Wrapper>
);

export default createFragmentContainer(SingleSlide, {
  singleSlide: graphql`
    fragment SingleSlide_singleSlide on SingleSlide {
      id
    }
  `
});
