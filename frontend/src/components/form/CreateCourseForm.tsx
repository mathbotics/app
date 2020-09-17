import React from 'react';
import { Form, Button } from 'antd';
import { FormItem } from './FormItem';

import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export const CreateCourseForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(() => {
    setFieldsValue({ name: '' });
  }, [setFieldsValue]);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFinishFailed={onSubmitError}
      layout="vertical"
      style={{ backgroundColor: 'white' }}
    >
      <FormItem
        name="name"
        value={getFieldValue('name')}
        type="text"
        input="courseName"
        placeholder="Course Name"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Create Course
      </Button>
    </Form>
  );
};
