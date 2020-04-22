import React from "react";
import { Form, Button } from "antd";
import { FormItem } from "./FormItem";

import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export const UpdateCourseForm = ({
  onSubmit,
  onSubmitError,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(() => {
    setFieldsValue({ name: "" });
  }, []);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFinishFailed={onSubmitError}
      layout="vertical"
      style={{ backgroundColor: "white" }}
    >
      <FormItem
        name="name"
        value={getFieldValue("name")}
        type="text"
        input="courseName"
        placeholder="Course Name"
      />

      <FormItem
        name="description"
        value={getFieldValue("description")}
        type="text"
        input="description"
        placeholder="Course Description"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Update
      </Button>
      {/* <DeleteButton /> */}
    </Form>
  );
};

const DeleteButton = () => (
  <Button
    block
    type="danger"
    size="large"
    onClick={() => console.log("Deleting")}
    style={{
      marginTop: "10px",
      backgroundColor: "transparent",
      color: "red",
      border: "0",
    }}
  >
    Delete
  </Button>
);