import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "../../form/FormItem";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditTextBlockForm_block } from "./__generated__/EditTextBlockForm_block.graphql";

type Props = {
  block?: EditTextBlockForm_block;
};
const EditTextBlockForm = ({ block }: Props): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      title: block?.title ?? "",
      body: block?.body ?? "",
    });
  }, []);

  const onSubmit = () => {};
  const onSubmitError = () => {};

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFinishFailed={onSubmitError}
      layout="vertical"
    >
      <FormItem
        name="title"
        value={getFieldValue("title")}
        type="text"
        input="text" //TODO: CHANGE ME
        placeholder="Title"
      />

      <FormItem
        name="body"
        value={getFieldValue("body")}
        type="text"
        input="text" //TODO: CHANGE ME
        placeholder="Body"
      />

      <Button block type="primary" size="large" htmlType="submit">
        <b>Save</b>
      </Button>
    </Form>
  );
};

export default createFragmentContainer(EditTextBlockForm, {
  block: graphql`
    fragment EditTextBlockForm_block on TextBlock {
      title
      body
    }
  `,
});
