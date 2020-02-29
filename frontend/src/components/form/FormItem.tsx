import React from "react";
import { Form, Input } from "antd";
import { EmailIcon, LockIcon, UserIcon } from "./";

type FormItemProps = {
  type: string;
  input: keyof FormRulesType;
  placeholder: string;
  decorator: Function;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type FormRulesType = {
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
    <Form.Item>
      {props.decorator(
        props.type,
        FormRules[props.input]
      )(
        <Input
          name={props.input}
          prefix={FormRules[props.input]["icon"]}
          placeholder={props.placeholder}
          onChange={props.onChange}
          type={props.type}
        />
      )}
    </Form.Item>
  );
};
