import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";

type RegisterFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type RegisterFormFields = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
      layout="vertical"
    >
      <FormItem
        name="firstName"
        value={getFieldValue("firstName")}
        type="text"
        input="firstName"
        placeholder="FirstName"
      />
      <FormItem
        name="lastName"
        value={getFieldValue("lastName")}
        type="text"
        input="lastName"
        placeholder="LastName"
      />
      <FormItem
        name="username"
        value={getFieldValue("username")}
        type="text"
        input="username"
        placeholder="Username"
      />

      <FormItem
        name="password"
        value={getFieldValue("password")}
        type="password"
        input="password"
        placeholder="Password"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Register
      </Button>
    </Form>
  );
};
