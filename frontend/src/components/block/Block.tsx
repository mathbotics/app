import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { Block_block } from "./__generated__/Block_block.graphql";
import MultipleChoiceQuestionBlock from "./multiple_choice/MultipleChoiceQuestionBlock";
import TextBlock from "./text/TextBlock";

type Props = { block: Block_block };
const Block = ({ block }: Props) => {
  switch (block.__typename) {
    case "MultipleChoiceQuestionBlock":
      return <MultipleChoiceQuestionBlock block={block} />;
    case "TextBlock":
      return <TextBlock block={block} />;
    case "EmptyBlock":
      console.log(block.id);
      return <div>Block not implemented</div>;
    default:
      return null;
  }
};

export default createFragmentContainer(Block, {
  block: graphql`
    fragment Block_block on Block {
      __typename
      ... on MultipleChoiceQuestionBlock {
        id
        ...MultipleChoiceQuestionBlock_block
      }
      ... on TextBlock {
        id
        ...TextBlock_block
      }
      ... on EmptyBlock {
        id
      }
    }
  `,
});
