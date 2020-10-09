import React from 'react';
import { Form, Button } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Store } from 'rc-field-form/lib/interface';
import { FormItem } from '../../form/FormItem';

import { EditTextBlockForm_block } from './__generated__/EditTextBlockForm_block.graphql';
import { commit as commitUpdateBlockToTextBlockMutation } from '../../../graphql/mutations/UpdateBlockToTextBlockMutation';

type Props = {
  block?: EditTextBlockForm_block;
  blockId: string;
};
const EditTextBlockForm = ({ block, blockId }: Props): JSX.Element => {
  const [form] = Form.useForm();
  const { setFieldsValue, getFieldValue } = form;

  React.useEffect(() => {
    setFieldsValue({
      title: block?.title ?? '',
      body: block?.body ?? '',
    });
  }, [block, setFieldsValue]);

  const onSubmit = ({ title, body }: Store) =>
    commitUpdateBlockToTextBlockMutation(
      { input: { blockId, title, body } },
      onSubmitSuccess,
      onSubmitError,
    );

  const onSubmitSuccess = () => {};
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
        value={getFieldValue('title')}
        type="text"
        input="text"
        placeholder="Title"
      />

      <FormItem
        name="body"
        value={getFieldValue('body')}
        type="text"
        input="text"
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
