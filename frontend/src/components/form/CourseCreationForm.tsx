import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";
import { SelectFormItem } from "./SelectFormItem";

type InvitationFormFormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

export type InvitationFormFormFields = {
  username: string;
  role: Role;
};

enum Role {
  ADMIN,
  GUARDIAN,
  INSTRUCTOR,
  STUDENT
}

export const CourseCreationForm = (props: any) => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(() => {
    setFieldsValue({
      name: "",
      suggestedLevel: ""
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
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

      <SelectFormItem
        defaultValue="FIRST"
        name="gradeLevel"
        options={[
          { value: "FIRST", text: "First" },
          { value: "SECOND", text: "Second" }
        ]}
        placeholder="Grade Level"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Create Course
      </Button>
    </Form>
  );
};
