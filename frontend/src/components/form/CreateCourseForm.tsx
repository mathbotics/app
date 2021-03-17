import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';
import { SelectFormItem } from './SelectFormItem';
type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};


enum GradeLevel {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
  SIXTH = 'SIXTH',
  SEVENTH = 'SEVENTH',
  EIGHTH = 'EIGHTH',
  NINTH = 'NINTH',
  TENTH = 'TENTH',
  ELEVENTH = 'ELEVENTH',
  TWELFTH = 'TWELFTH',
}

export const CreateCourseForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(() => {
    setFieldsValue({ name: '', suggestedLevel: GradeLevel.FIRST });
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

      <SelectFormItem
        name="suggestedLevel"
        defaultValue={GradeLevel.FIRST}
        options={Object.values(GradeLevel).map((suggestedLevel) => ({
          text: suggestedLevel,
          value: suggestedLevel,
        }))}
        value={getFieldValue('gradeLevel')}
        placeholder="Grade Level"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Create Course
      </Button>
    </Form>
  );
};
