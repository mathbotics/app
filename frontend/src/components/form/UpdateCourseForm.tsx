import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';

type FormProps = {
  onSubmit: (values: Store) => void;
  onDelete: () => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export const UpdateCourseForm = ({
  onSubmit,
  onDelete,
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
      onReset={onDelete}
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

      <FormItem
        name="description"
        value={getFieldValue('description')}
        type="text"
        input="description"
        placeholder="Course Description"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};

/*
TODO
Delete Button logic is done(?)
Notes:
Seems to be leftovers from previous work that never got added,
Needs to be implemented on to site
Line on bottom was added to not warn use that it is not being used
 */
// eslint-disable-next-line
const DeleteButton = () => (
  <Button
    block
    type="primary"
    danger
    htmlType="reset"
    size="large"
    onClick={() => console.log('Deleting')}
    style={{
      marginTop: '10px',
    }}
  >
    Delete
  </Button>
);
