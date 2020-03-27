import React, { FormEvent } from "react";
import { Input, Layout } from "antd";
import styled from "styled-components";
import { MultipleChoiceProps, MultipleChoiceGroup } from "./MultipleChoice";
import { RadioChangeEvent } from "antd/lib/radio";

const Wrapper = styled(Layout.Content)`
  justify-content: center;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 300px;
`;

export const MultipleChoiceEdit = ({
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
      <h2>Question</h2>
      <Input onChange={e => console.log(e.target.value)} placeholder={text} />
      <h2>Responses</h2>
      <MultipleChoiceGroup
        selected={selected}
        onChange={multipleChoiceHandler}
        choices={choices}
      />
    </Wrapper>
  );
};
