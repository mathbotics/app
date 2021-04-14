import React from 'react';
import styled from 'styled-components';
import { FileImageOutlined, PicCenterOutlined } from '@ant-design/icons';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import nullthrows from 'nullthrows';
import { SingleSlide_singleSlide } from './__generated__/SingleSlide_singleSlide.graphql';
import { Block as BlockType } from '../../types/Block';
import Block from '../block/Block';

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.15s ease-in-out;
  padding-left: .5em;
  background-color: ${({ selected, preview }: WrapperProps) =>
    (selected && preview ? '#1990ff' : '#fff')};
  color: ${({ selected, preview }: WrapperProps) =>
    selected && preview && 'white'};
  :hover {
    cursor: ${({ preview }: WrapperProps) => preview && 'pointer'};
    background-color: ${({ preview }: WrapperProps) => preview && '#1990ff'};
    color: ${({ preview }: WrapperProps) => preview && 'white'};
  }
`;

type Props = {
  singleSlide?: SingleSlide_singleSlide;
  preview?: boolean;
  selected?: boolean;
  onSelectBlock?: (block: BlockType) => void;
};
const SingleSlide = ({
  singleSlide,
  onSelectBlock,
  preview,
  selected,
}: Props) => {
  return (
    <Wrapper
      preview={preview}
      selected={selected}
      onClick={() =>
        onSelectBlock && onSelectBlock(nullthrows(singleSlide?.block))}
    >
      {preview ? (
        <FileImageOutlined style={{ fontSize: 30 }} />
      ) : (
        <Block block={nullthrows(singleSlide?.block)} />
      )}
    </Wrapper>
  );
};

export default createFragmentContainer(SingleSlide, {
  singleSlide: graphql`
    fragment SingleSlide_singleSlide on SingleSlide {
      id
      block {
        ...EditBlockSidebar_block
        ...Block_block
      }
    }
  `,
});
