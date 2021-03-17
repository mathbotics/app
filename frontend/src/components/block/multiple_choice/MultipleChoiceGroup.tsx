import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import style from 'styled-components';
import { MultipleChoiceGroup_block } from './__generated__/MultipleChoiceGroup_block.graphql';
import { setConstantValue } from 'typescript';
import { useState } from 'react';
import RadioGroup from 'antd/lib/radio/group';

type MultipleChoiceChoiceProps = {
  id: string;
  value?: string;
  text?: string;
};
const MultipleChoiceChoice = ({
  text,
  id,
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
const [choice, setchoice] = useState<RadioGroup>();
  return (
  <Radio.Group onChange={(e: any) => radioTask(e)} value={choice}>
    {block.choices.map(({ id, text }, index: number) => (
      <MultipleChoiceChoice key={id} id={id} value={id} text={text} />
      ))}
  </Radio.Group>
);

  function radioTask(event){
    console.log(event.target.value);
    setchoice(event.target.value);

    /*do any call to the backend to save choices, submitting with a submit
     button instead of calling after every radio option change will reduce
     server load*/

  }
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
  `,
});
