import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

type Props = {
  name: string;
  options: Array<{ value: string | number; text: string }>;
  placeholder: string;
  value?: string | number;
  defaultValue: string;
};

export const SelectFormItem = (props: Props): JSX.Element => (
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
