import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";

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

export const InvitationForm = (props: InvitationFormFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  // Set default form values
  React.useEffect(() => {
    setFieldsValue({
      email: "",
      role: Role.INSTRUCTOR
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitError}
      layout="vertical"
    >
      <FormItem
        name="email"
        value={getFieldValue("username")}
        type="text"
        input="username"
        placeholder="Username"
      />

      <Button block type="primary" size="large" htmlType="submit">
        Invite
      </Button>
    </Form>
  );
};
