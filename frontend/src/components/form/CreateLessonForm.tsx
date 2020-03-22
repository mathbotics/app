import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type CreateLessonFormFields = {
  title: string;
};

export const CreateLessonForm = (props: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      title: ""
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
      layout="vertical"
    >
      <p>
        <b>Lesson Title</b>
      </p>
      <FormItem
        name="title"
        value={getFieldValue("title")}
        type="text"
        input="lessonTitle"
        placeholder="Creating a robot 101"
      />
      <Button block type="primary" size="large" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};
