import React, { useState } from "react";
import styled from "styled-components";
import { Radio, Layout } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

type QuestionProps = {
  text: string;
};
const Question = ({ text }: QuestionProps) => {
  return <h1 style={{ width: "300px" }}>{text}</h1>;
};

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
  choices: Array<{ value: string; text: string }>;
  selected: number;
};
export const MultipleChoiceGroup = ({
  choices,
  selected,
  onChange
}: MultipleChoiceGroupProps) => {
  return (
    <Radio.Group onChange={onChange} value={selected}>
      {choices.map(({ value, text }, index) => (
        <MultipleChoiceChoice
          key={index}
          index={index}
          value={value}
          text={text}
        />
      ))}
    </Radio.Group>
  );
};

export type MultipleChoiceProps = {
  text: string;
  choices: Array<{ value: string; text: string }>;
  selected: number;
  onChange: (value: number) => void;
};

export const MultipleChoice = ({
  text,
  choices,
  selected,
  onChange
}: MultipleChoiceProps) => {
  const multipleChoiceHandler = ({ target }: RadioChangeEvent) => {
    onChange(target.value);
  };
  return (
    <Wrapper>
      <Question text={text} />
      <MultipleChoiceGroup
        selected={selected}
        onChange={multipleChoiceHandler}
        choices={choices}
      />
    </Wrapper>
  );
};
