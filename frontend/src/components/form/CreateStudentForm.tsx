import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "./FormItem";
import { SelectFormItem } from "./SelectFormItem";

type FormProps = {
  onSubmit: (values: Store) => void;
  onSubmitError: (error: ValidateErrorEntity) => void;
};

enum GradeLevel {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
  FOURTH = "FOURTH",
  FIFTH = "FIFTH",
  SIXTH = "SIXTH",
  SEVENTH = "SEVENTH",
  EIGHTH = "EIGHTH",
  NINTH = "NINTH",
  TENTH = "TENTH",
  ELEVENTH = "ELEVENTH",
  TWELFTH = "TWELFTH",
}

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
      lastName: "",
      username: "",
      password: "",
      gradeLevel: GradeLevel.FIRST,
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
        <b>Username</b>
      </p>
      <FormItem
        name="username"
        value={getFieldValue("username")}
        type="username"
        input="text"
        placeholder="Username"
      />
      <p>
        <b>Password</b>
      </p>
      <FormItem
        name="password"
        value={getFieldValue("password")}
        type="password"
        input="text"
        placeholder="Password"
      />
      <p>
        <b>First Name</b>
      </p>
      <FormItem
        name="firstName"
        value={getFieldValue("firstName")}
        type="firstName"
        input="text"
        placeholder="First Name"
      />
      <p>
        <b>Last Name</b>
      </p>
      <FormItem
        name="lastName"
        value={getFieldValue("lastName")}
        type="lastName"
        input="text"
        placeholder="Last Name"
      />
      <p>
        <b>Grade Level</b>
      </p>
      <SelectFormItem
        name="gradeLevel"
        defaultValue={GradeLevel.FIRST}
        options={Object.values(GradeLevel).map((gradeLevel) => ({
          text: gradeLevel,
          value: gradeLevel,
        }))}
        value={getFieldValue("gradeLevel")}
        placeholder="Grade Level"
      />
      <Button block type="primary" size="large" htmlType="submit">
        Create student
      </Button>
    </Form>
  );
};
