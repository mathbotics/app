import React, { SyntheticEvent } from "react";
import { FormComponentProps } from "antd/lib/form";
import { Form, Button } from "antd";

import { FormItem } from "./FormItem";

interface LogInFormProps extends FormComponentProps {
  onSubmit: (form: LogInFormFields) => void;
}

export type LogInFormFields = {
  username: string;
  password: string;
};

const UnwrappedLogInForm = (props: LogInFormProps): JSX.Element => {
  const [formFields, setFormFields] = React.useState<LogInFormFields>({
    username: "",
    password: ""
  });

  const { form } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    // Validate props
    // If successful, call parent onSubmit making request
    form.validateFields((err, values) => !err && props.onSubmit(formFields));
  };

  // Changes the value for a specific input of the form state
  type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
  const handleFormFieldChange = (event: InputChangeEvent): void => {
    const key: string = event.target.name;
    const value: string = event.target.value;
    setFormFields({ ...formFields, [key]: value });
  };

  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <FormItem
        type="text"
        input="username"
        placeholder="Username"
        decorator={getFieldDecorator}
        onChange={handleFormFieldChange}
      />

      <FormItem
        type="password"
        input="password"
        placeholder="Password"
        decorator={getFieldDecorator}
        onChange={handleFormFieldChange}
      />

      {/* <Form.Item>
        <a>Forgot password</a>
      </Form.Item> */}

      {/* Submit */}
      <Button block type="primary" size="large" htmlType="submit">
        Log in
      </Button>
    </Form>
  );
};

export const LogInForm = Form.create<LogInFormProps>()(UnwrappedLogInForm);
