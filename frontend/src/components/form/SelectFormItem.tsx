import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

type Props = {
  name: string;
  options: Array<{ value: string; text: string }>;
  placeholder: string;
  value: string;
};

export const FormItem = (props: Props): JSX.Element => {
  return (
    <Form.Item name={props.name}>
      <Select>
        {props.options.map(option => (
          <Option value={option.value}>{option.text}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};
