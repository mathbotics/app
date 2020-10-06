import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';
import { SelectFormItem } from './SelectFormItem';

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};
// Delete Form 
export type DeleteStudentFormFields = { title: string };
export const DeleteStudentForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
    const [form] = Form.useForm();
  return (
      <Form
        form={form}
        onFinish={onSubmit}
        onFinishFailed={onSubmitError}
        layout='vertical'
      >
        <p>Are you sure you wish to delete all students?</p>
        <p>You cannot undo this action!</p>

        <Button block type="primary" size="large" danger htmlType="submit">
            Delete All Students
        </Button>
      </Form>
  )
}