import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';
import { SelectFormItem } from './SelectFormItem';

type ForgotPasswordFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type ForgotPasswordFormFields = {
  username: string;
//   role: Role;
};

// enum Role {
//   ADMIN = 'Admin',
//   GUARDIAN = 'Guardian',
//   INSTRUCTOR = 'Instructor',
//   STUDENT = 'Student',
// }

export const ForgotPasswordForm = (props: ForgotPasswordFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(
    () =>
      setFieldsValue({
        email: '',
        // role: Role.INSTRUCTOR,
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
      {/* <SelectFormItem
        defaultValue="Instructor"
        name="role"
        options={[
          { value: Role.ADMIN, text: 'Admin' },
          { value: Role.INSTRUCTOR, text: 'Instructor' },
        ]}
        placeholder="Role"
      /> */}

      <Button block type="primary" size="large" htmlType="submit">
        Reset Password
      </Button>
    </Form>
  );
};
