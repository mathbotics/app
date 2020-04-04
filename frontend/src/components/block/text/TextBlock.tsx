import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { TextBlock_block } from "./__generated__/TextBlock_block.graphql";

type Props = { block: TextBlock_block };
const TextBlock = ({ block }: Props) => <p>{block?.title}</p>;

export default createFragmentContainer(TextBlock, {
  block: graphql`
    fragment TextBlock_block on TextBlock {
      id
      title
      body
    }
  `,
});
