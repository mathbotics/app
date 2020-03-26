import React, { FormEvent } from "react";
import { Input, Layout } from "antd";
import styled from "styled-components";
import { MultipleChoiceProps, MultipleChoiceGroup } from "./MultipleChoice";
import { RadioChangeEvent } from "antd/lib/radio";

const Wrapper = styled(Layout.Content)``;

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
      <Input onChange={e => console.log(e)} placeholder={text} />
      <MultipleChoiceGroup
        selected={selected}
        onChange={multipleChoiceHandler}
        choices={choices}
      />
    </Wrapper>
  );
};
