import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';

type ResetPasswordFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type ResetPasswordFormFields = {
  username: string;
  password: string;
};

export const ResetPasswordForm = (props: ResetPasswordFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      username: '',
      password: '',
    });
  }, [setFieldsValue]);

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
      layout="vertical"
    >
      <FormItem
        name="username"
        value={getFieldValue('username')}
        type="text"
        input="username"
        placeholder="Username"
      />

      <FormItem
        name="password"
        value={getFieldValue('password')}
        type="password"
        input="password"
        placeholder="New Password"
      />

      <Button block type="primary" size="large" htmlType="submit">
        <b>Go</b>
      </Button>
    </Form>
  );
};
