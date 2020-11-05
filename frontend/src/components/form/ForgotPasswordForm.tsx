import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';

type ForgotPasswordFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type ForgotPasswordFormFields = {
  username: string;
};

export const ForgotPasswordForm = (props: ForgotPasswordFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(
    () =>
      setFieldsValue({
        email: '',
      }),
    [setFieldsValue],
  );

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
      layout="vertical"
      style={{ backgroundColor: 'white' }}
    >
      <FormItem
        name="email"
        value={getFieldValue('username')}
        type="text"
        input="email"
        placeholder="Email"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Reset Password
      </Button>
    </Form>
  );
};
