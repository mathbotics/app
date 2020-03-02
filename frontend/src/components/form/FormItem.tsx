import React from "react";
import { Form, Input } from "antd";
import { EmailIcon, LockIcon, UserIcon } from "./";

type FormItemProps = {
  name: string;
  value: string;
  type: string;
  input: keyof FormRulesType;
  placeholder: string;
};

type FormRulesType = {
  firstName: GenericFormRuleType;
  lastName: GenericFormRuleType;
  email: GenericFormRuleType;
  password: GenericFormRuleType;
  username: GenericFormRuleType;
};

type FormRuleType = {
  required: boolean;
  message: string;
};

type GenericFormRuleType = {
  rules: FormRuleType[];
  icon: JSX.Element;
};

const FormRules: FormRulesType = {
  firstName: {
    rules: [{ required: true, message: "Please input your First Name." }],
    icon: <UserIcon />
  },
  lastName: {
    rules: [{ required: true, message: "Please input your Last Name." }],
    icon: <UserIcon />
  },
  email: {
    rules: [{ required: true, message: "Please input your email." }],
    icon: <EmailIcon />
  },
  username: {
    rules: [{ required: true, message: "Please input your username." }],
    icon: <UserIcon />
  },
  password: {
    rules: [{ required: true, message: "Please input your password." }],
    icon: <LockIcon />
  }
};

export const FormItem = (props: FormItemProps): JSX.Element => {
  return (
    <Form.Item name={props.name} rules={FormRules[props.input].rules}>
      <Input
        prefix={FormRules[props.input].icon}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Form.Item>
  );
};
