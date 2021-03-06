import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

type FormProps = {
    onSubmit: (values: Store) => void;
    onSubmitError: (error: ValidateErrorEntity) => void;
};

export type DeleteStudentFormFields = { title: string };
export const DeleteStudentModalContent = ({
    onSubmit,
    onSubmitError,
}: FormProps): JSX.Element => {
    const [form] = Form.useForm();
    return (
      <Form
        form={form}
        onFinish={onSubmit}
        onFinishFailed={onSubmitError}
        layout="vertical"
      >
        <p>Are you sure you wish to perform this action?</p>
        <p>You cannot undo this!</p>

        <Button block type="primary" size="large" danger htmlType="submit">
          Delete
        </Button>
      </Form>
    )
}
