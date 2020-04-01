import React from "react";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { MultipleChoiceGroup_block } from "./__generated__/MultipleChoiceGroup_block.graphql";

type MultipleChoiceChoiceProps = {
  index: number;
  value?: string;
  text?: string;
};
const MultipleChoiceChoice = ({
  text,
  index
}: MultipleChoiceChoiceProps): JSX.Element => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <Radio style={radioStyle} value={index}>
      {text}
    </Radio>
  );
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
    <Radio.Group onChange={(e: any) => console.log(e)} value={""}>
      {block.choices.map(({ id, text }, index) => (
        <MultipleChoiceChoice key={id} index={index} value={id} text={text} />
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
