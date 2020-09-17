import React from 'react';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { EditorSlidePreview_slide } from './__generated__/EditorSlidePreview_slide.graphql';
import { Block } from '../../types/Block';
import Slide from './Slide';
import styled from 'styled-components';
import nullthrows from 'nullthrows';

type Props = {
  onSelectBlock?: (block: Block) => void; // This onClick should return a block to edit
  editing?: boolean;
  slide?: EditorSlidePreview_slide;
  selectedBlock?: Block;
};
const EditorSlidePreview = ({
  editing = false,
  onSelectBlock,
  selectedBlock,
  slide,
}: Props) => (
  <Wrapper>
    {slide ? (
      <Slide
        preview={false}
        onSelectBlock={
          editing
            ? nullthrows(
                onSelectBlock,
                'onSelectBlock must be provided if editing is true',
              )
            : undefined
        }
        slide={slide}
        selectedBlock={selectedBlock}
      />
    ) : (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Result
          style={{ display: 'inline-block' }}
          icon={<SmileOutlined />}
          title="Get started by creating a slide!"
        />
      </div>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export default createFragmentContainer(EditorSlidePreview, {
  slide: graphql`
    fragment EditorSlidePreview_slide on Slide {
      ...Slide_slide
    }
  `,
});
