import React from "react";
import styled from "styled-components";
import { UnorderedListOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { graphql } from "babel-plugin-relay/macro";

import { MultipleChoice, MultipleChoiceEdit } from "../block";
import { createFragmentContainer } from "react-relay";
import { HalfSlide_halfSlide } from "./__generated__/HalfSlide_halfSlide.graphql";

const BlockAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;
const BlockBWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: ${({ preview }: WrapperProps) => preview && "1px solid #ccc"};
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
  halfSlide?: HalfSlide_halfSlide;
  BlockA?: BlockComponent;
  BlockB?: BlockComponent;
  preview?: boolean;
  selected?: boolean;
};
const HalfSlide = ({ BlockA, BlockB, preview, selected }: Props) => (
  <Wrapper preview={preview} selected={selected}>
    <BlockAWrapper>
      {preview ? (
        <AlignLeftOutlined style={{ fontSize: 50 }} />
      ) : (
        BlockB ?? "No block provided"
      )}
    </BlockAWrapper>

    <BlockBWrapper>
      {preview ? (
        <UnorderedListOutlined style={{ fontSize: 50 }} />
      ) : (
        BlockB ?? "No block provided"
      )}
    </BlockBWrapper>
  </Wrapper>
);

export default createFragmentContainer(HalfSlide, {
  halfSlide: graphql`
    fragment HalfSlide_halfSlide on HalfSlide {
      id
    }
  `
});
