import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type CreateStudentFormFields = { title: string };
export const CreateStudentForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      firstName: "",
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFinishFailed={onSubmitError}
      layout="vertical"
    >
      <p>
        <b>Student FirstName</b>
      </p>
      <FormItem
        name="firstName"
        value={getFieldValue("firstName")}
        type="text"
        input="text"
        placeholder="First Name"
      />
      <Button block type="primary" size="large" htmlType="submit">
        Create student
      </Button>
    </Form>
  );
};
