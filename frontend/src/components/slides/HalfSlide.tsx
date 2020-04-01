import React, { useState } from "react";
import styled from "styled-components";
import { UnorderedListOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { graphql } from "babel-plugin-relay/macro";
import nullthrows from "nullthrows";
import { createFragmentContainer } from "react-relay";
import { HalfSlide_halfSlide } from "./__generated__/HalfSlide_halfSlide.graphql";
import { Block as BlockType } from "../../types/Block";
import Block from "../block/Block";

const BlockAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  margin: 0px 2px 0px 0px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;
const BlockBWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  margin: 0px 0px 0px 2px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

enum ComponentState {
  Default,
  BlockASelected,
  BlockBSelected
}

type BlockComponent = React.ReactElement;
type Props = {
  halfSlide?: HalfSlide_halfSlide;
  BlockA?: BlockComponent;
  BlockB?: BlockComponent;
  preview?: boolean;
  selected?: boolean;
  onSelectBlock?: (block: BlockType) => void;
};
const HalfSlide = ({ halfSlide, BlockA, BlockB, preview, selected }: Props) => {
  const { Default, BlockASelected, BlockBSelected } = ComponentState;
  const [state, setState] = useState<ComponentState>(Default);
  return (
    <Wrapper preview={preview} selected={selected}>
      <BlockAWrapper onClick={() => setState(BlockASelected)}>
        {preview ? (
          <AlignLeftOutlined style={{ fontSize: 50 }} />
        ) : (
          <Block block={nullthrows(halfSlide?.firstHalfBlock)} /> ??
          "No block provided"
        )}
      </BlockAWrapper>

      <BlockBWrapper onClick={() => setState(BlockBSelected)}>
        {preview ? (
          <UnorderedListOutlined style={{ fontSize: 50 }} />
        ) : (
          <Block block={nullthrows(halfSlide?.secondHalfBlock)} /> ??
          "No block provided"
        )}
      </BlockBWrapper>
    </Wrapper>
  );
};

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
  `
});
