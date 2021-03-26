import React from 'react';
import { Form, Button } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { FormItem } from './FormItem';
import { SelectFormItem } from './SelectFormItem';

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

enum DifficultyLevels{
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

enum TimeIntervals{
  FIFTEEN = '15 minutes',
  THIRTY = '30 minutes',
  FORTYFIVE = '45 minutes',
  SIXTY = '60 minutes'
}

export type CreateLessonFormFields = { title: string };
export const CreateLessonForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      title: '',
      time: TimeIntervals.FIFTEEN,
      difficultyLevel: DifficultyLevels.EASY
    });
  }, [setFieldsValue]);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFinishFailed={onSubmitError}
      layout="vertical"
    >
      <p>
        <b>Lesson Title</b>
      </p>
      <FormItem
        name="title"
        value={getFieldValue('title')}
        type="text"
        input="lessonTitle"
        placeholder="Creating a Robot 101"
      />
      <SelectFormItem
        defaultValue=""
        name="difficultyLevel"
        options={[
          { value: DifficultyLevels.EASY, text: 'Easy' },
          { value: DifficultyLevels.MEDIUM, text: 'Medium' },
          { value: DifficultyLevels.HARD, text: 'Hard' }
        ]}
        placeholder="Difficulty Level"
      />
      <SelectFormItem
        defaultValue=""
        name="time"
        options={[
          { value: TimeIntervals.FIFTEEN, text: '15 minutes' },
          { value: TimeIntervals.THIRTY, text: '30 minutes' },
          { value: TimeIntervals.FORTYFIVE, text: '45 minutes' },
          { value: TimeIntervals.SIXTY, text: '60 minutes' }
        ]}
        placeholder="Time"
      />
      <Button block type="primary" size="large" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};
