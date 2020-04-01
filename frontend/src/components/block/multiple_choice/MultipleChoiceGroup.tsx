import React from "react";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { MultipleChoiceGroup_block } from "./__generated__/MultipleChoiceGroup_block.graphql";
import style from "styled-components";

type MultipleChoiceChoiceProps = {
  id: string;
  value?: string;
  text?: string;
};
const MultipleChoiceChoice = ({
  text,
  id
}: MultipleChoiceChoiceProps): JSX.Element => {
  const RadioButton = style(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
  background-color: #f0f2f5;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
  height: auto;
  margin: 10px 0px;
  `;
  return <RadioButton value={id}>{text}</RadioButton>;
};

export type MultipleChoiceGroupProps = {
  onChange: (e: RadioChangeEvent) => void;
  choices?: Array<{
    id: string;
    value: string;
    text: string;
    correct: boolean;
  }>;

  selected: number;
};

type Props = { block: MultipleChoiceGroup_block };
const MultipleChoiceGroup = ({ block }: Props) => {
  return (
    <Radio.Group onChange={(e: any) => console.log(e.target.value)} value={""}>
      {block.choices.map(({ id, text }, index: number) => (
        <MultipleChoiceChoice key={id} id={id} value={id} text={text} />
      ))}
    </Radio.Group>
  );
};

export default createFragmentContainer(MultipleChoiceGroup, {
  block: graphql`
    fragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {
      choices {
        id
        text
        correct
      }
    }
  `
});
