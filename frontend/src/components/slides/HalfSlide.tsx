import React from "react";
import styled from "styled-components";
import { UnorderedListOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { graphql } from "babel-plugin-relay/macro";
import nullthrows from "nullthrows";
import { createFragmentContainer } from "react-relay";
import { HalfSlide_halfSlide } from "./__generated__/HalfSlide_halfSlide.graphql";
import { Block as BlockType } from "../../types/Block";
import Block from "../block/Block";

type BlockWrapperProps = { preview?: boolean };
const BlockAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 49.5%;
  overflow: hidden;
  background-color: ${({ preview }: BlockWrapperProps) => !preview && "white"};
`;

const BlockBWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 49.5%;
  background-color: ${({ preview }: BlockWrapperProps) => !preview && "white"};
`;

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  transition: all 0.15s ease-in-out;
  background-color: ${({ selected, preview }: WrapperProps) =>
    selected && preview && "#1990ff"};
  color: ${({ selected, preview }: WrapperProps) =>
    selected && preview && "white"};
  :hover {
    background-color: ${({ preview }: WrapperProps) => preview && "#1990ff"};
    color: ${({ preview }: WrapperProps) => preview && "white"};
  }
`;

type BlockComponent = React.ReactElement;
type Props = {
  halfSlide?: HalfSlide_halfSlide;
  BlockA?: BlockComponent;
  BlockB?: BlockComponent;
  preview?: boolean;
  selected?: boolean;
  selectedBlock?: any;
  onSelectBlock?: (block: BlockType) => void;
};
const HalfSlide = ({ halfSlide, preview, selected }: Props) => (
  <Wrapper preview={preview} selected={selected}>
    <BlockAWrapper
      preview={preview}
      onClick={() =>
        !preview && console.log("FirstBlockID: " + halfSlide?.firstHalfBlock)
      }
    >
      {preview ? (
        <AlignLeftOutlined style={{ fontSize: 50 }} />
      ) : (
        <Block block={nullthrows(halfSlide?.firstHalfBlock)} /> ??
        "No block provided"
      )}
    </BlockAWrapper>

    <BlockBWrapper
      preview={preview}
      onClick={() =>
        !preview && console.log("SecondBlockID: " + halfSlide?.secondHalfBlock)
      }
    >
      {preview ? (
        <UnorderedListOutlined style={{ fontSize: 50 }} />
      ) : (
        <Block block={nullthrows(halfSlide?.secondHalfBlock)} /> ??
        "No block provided"
      )}
    </BlockBWrapper>
  </Wrapper>
);

export default createFragmentContainer(HalfSlide, {
  halfSlide: graphql`
    fragment HalfSlide_halfSlide on HalfSlide {
      id
      firstHalfBlock {
        ...EditBlockSidebar_block
        ...Block_block
      }
      secondHalfBlock {
        ...EditBlockSidebar_block
        ...Block_block
      }
    }
  `,
});
