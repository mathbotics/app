import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { TextBlock_block } from './__generated__/TextBlock_block.graphql';

/* This is the page to start doing customizations to the Slide textblock content */

type Props = { block: TextBlock_block };


/* Other Display */
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
    <Title text={block?.title} />
    <Body text={block?.body} />
  </>
);

export default createFragmentContainer(TextBlock, {
  block: graphql`
    fragment TextBlock_block on TextBlock {
      id
      title
      body
    }
  `,
});
