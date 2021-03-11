import React from 'react';
import styled from 'styled-components';

import { Layout, Menu, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { TextBlock_block } from './__generated__/TextBlock_block.graphql';

/* This is the page to start doing customizations to the Slide textblock content */

type Props = { block: TextBlock_block };

/* Other Display */

/*Notes from edgar: if you guys ever plan to work on special text formatting and user selection of fonts, text position,
or anything else, this would be the place... maybe making the Title and Body have dynamic styles. Those should be on
the const Title and const Body */

const Title = ({ text }: { text: string }) => (
  <>
    <h1>{text}</h1>
  </>
  );

 const Body = ({ text }: { text: string}) => (
  <>
    <p>{text}</p>
  </>
 ); 

/* Main display */
const TextBlock = ({ block }: Props) => (
  <>
  <SlideWrapper>
    <TitleWrapper>
      <Title text={block?.title} />
    </TitleWrapper>
    <BodyWrapper>
      <Body text={block?.body} />
    </BodyWrapper>
  </SlideWrapper>
  </>
);

/* CSS formats */
const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  padding: 10px 10px 10px 10px;
  display: content;
  font-size: 24px;
`;

const BodyWrapper = styled.div`
  
  width: 100%;
  height: 90%;
  padding: 10px 10px 10px 10px;

  display: content;
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default createFragmentContainer(TextBlock, {
  block: graphql`
    fragment TextBlock_block on TextBlock {
      id
      title
      body
    }
  `,
});
