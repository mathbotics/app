import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';

type ResetPasswordFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type ResetPasswordFormFields = {
  email: string;
  password: string;
};

export const ResetPasswordForm = (props: ResetPasswordFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      email: '',
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
        name="email"
        value={getFieldValue('email')}
        type="text"
        input="email"
        placeholder="e-mail"
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
