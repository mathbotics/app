import React from "react";
import styled from "styled-components";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { MultipleChoiceQuestionBlock_block } from "./__generated__/MultipleChoiceQuestionBlock_block.graphql";
import MultipleChoiceGroup from "./MultipleChoiceGroup";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const Question = ({ text }: { text: string }) => {
  return <h1 style={{ width: "300px" }}>{text}</h1>;
};

export type MultipleChoiceProps = { block: MultipleChoiceQuestionBlock_block };
const MultipleChoiceQuestionBlock = ({ block }: MultipleChoiceProps) => (
  <Wrapper>
    <Question text={block.text} />
    <MultipleChoiceGroup block={block} />
  </Wrapper>
);

export default createFragmentContainer(MultipleChoiceQuestionBlock, {
  block: graphql`
    fragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {
      __typename
      text
      ...MultipleChoiceGroup_block
    }
  `
});
