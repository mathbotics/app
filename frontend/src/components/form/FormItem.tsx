import React from "react";
import { Form, Input } from "antd";

import { EmailIcon, LockIcon, UserIcon, BookIcon, BarsIcon } from "./";

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
  courseName: GenericFormRuleType;
  courseTitle: GenericFormRuleType;
  lessonTitle: GenericFormRuleType;
  requiredText: GenericFormRuleType;
  text: GenericFormRuleType;
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
    icon: <UserIcon />,
  },
  lastName: {
    rules: [{ required: true, message: "Please input your Last Name." }],
    icon: <UserIcon />,
  },
  email: {
    rules: [{ required: true, message: "Please input your email." }],
    icon: <EmailIcon />,
  },
  username: {
    rules: [{ required: true, message: "Please input your username." }],
    icon: <UserIcon />,
  },
  password: {
    rules: [{ required: true, message: "Please input your password." }],
    icon: <LockIcon />,
  },
  courseName: {
    rules: [{ required: true, message: "Please input your course name." }],
    icon: <BookIcon />,
  },
  courseTitle: {
    rules: [{ required: true, message: "Please input your course title." }],
    icon: <BookIcon />,
  },
  lessonTitle: {
    rules: [{ required: true, message: "Please input title of the lesson." }],
    icon: <BarsIcon />,
  },
  requiredText: {
    rules: [
      { required: true, message: "Please fill in this field. Por favor." },
    ],
    icon: <BarsIcon />,
  },
  text: {
    rules: [],
    icon: <BarsIcon />,
  },
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
