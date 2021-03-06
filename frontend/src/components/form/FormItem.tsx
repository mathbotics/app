import React from 'react';
import { Form, Input } from 'antd';

import {
  EmailIcon,
  LockIcon,
  UserIcon,
  BookIcon,
  BarsIcon,
  AlignLeftIcon,
} from ".";

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
  lessonTitle: GenericFormRuleType;
  requiredText: GenericFormRuleType;
  text: GenericFormRuleType;
  description: GenericFormRuleType;
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
    rules: [{ required: true, message: 'Please input your First Name.' }],
    icon: <UserIcon />,
  },
  lastName: {
    rules: [{ required: true, message: 'Please input your Last Name.' }],
    icon: <UserIcon />,
  },
  email: {
    rules: [{ required: true, message: 'Please input your email.' }],
    icon: <EmailIcon />,
  },
  username: {
    rules: [{ required: true, message: 'Please input your username.' }],
    icon: <UserIcon />,
  },
  password: {
    rules: [{ required: true, message: 'Please input your password.' }],
    icon: <LockIcon />,
  },
  courseName: {
    rules: [{ required: true, message: 'Please input your course name.' }],
    icon: <BookIcon />,
  },
  description: {
    rules: [{ required: true, message: 'Please add a description.' }],
    icon: <AlignLeftIcon />,
  },

  lessonTitle: {
    rules: [{ required: true, message: 'Please input title of the lesson.' }],
    icon: <BarsIcon />,
  },
  requiredText: {
    rules: [
      { required: true, message: 'Please fill in this field. Por favor.' },
    ],
    icon: <BarsIcon />,
  },
  text: {
    rules: [],
    icon: <BarsIcon />,
  },
};

export const FormItem = (props: FormItemProps): JSX.Element => (
  <Form.Item name={props.name} rules={FormRules[props.input].rules}>
    <Input
      prefix={FormRules[props.input].icon}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  </Form.Item>
  );
