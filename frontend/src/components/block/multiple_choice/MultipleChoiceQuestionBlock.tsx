import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { MultipleChoiceQuestionBlock_block } from './__generated__/MultipleChoiceQuestionBlock_block.graphql';
import MultipleChoiceGroup from './MultipleChoiceGroup';

const { Title } = Typography;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const Question = ({ text }: { text: string }) => (
  <div
    style={{ width: '350px', overflowWrap: 'break-word', color: '#646464' }}
  >
    <Title level={2}>{text}</Title>
  </div>
  );

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
  `,
});
