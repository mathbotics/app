import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

type Props = {
  name: string;
  options: Array<{ value: string; text: string }>;
  placeholder: string;
  value?: string;
  defaultValue: string;
};

export const SelectFormItem = (props: Props): JSX.Element => {
  return (
    <Form.Item name={props.name}>
      <Select defaultValue="Test">
        {props.options.map((option, index) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};
