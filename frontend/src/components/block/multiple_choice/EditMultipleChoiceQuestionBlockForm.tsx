import React from "react";
import { Form, Button } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FormItem } from "../../form/FormItem";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditMultipleChoiceQuestionBlockForm_block } from "./__generated__/EditMultipleChoiceQuestionBlockForm_block.graphql";
import uuid from "uuid/v4";

type Props = {
  block?: EditMultipleChoiceQuestionBlockForm_block;
};
const EditMultipleChoiceQuestionBlockForm = ({ block }: Props): JSX.Element => {
  const [text, setText] = React.useState(block?.text ?? "");
  const [choices, setChoices] = React.useState(block?.choices ?? []);

  const onSubmit = () => {};
  const onSubmitError = () => {};

  console.log(choices);

  return (
    <>
      <FormItem
        name="text"
        value={text}
        type="text"
        input="text"
        placeholder="Question Text"
      />
      {choices.map(({ text, id }) => (
        <FormItem
          key={id}
          name="choice"
          type="text"
          input="requiredText"
          placeholder="Choice Text"
          value={text}
        />
      ))}
      <Button
        block
        onClick={() =>
          setChoices([...choices, { text: "", id: uuid(), correct: false }])
        }
        type="link"
        size="large"
      >
        <b>Add choice</b>
      </Button>
      <Button block type="primary" size="large" htmlType="submit">
        <b>Save</b>
      </Button>
    </>
  );
};

export default createFragmentContainer(EditMultipleChoiceQuestionBlockForm, {
  block: graphql`
    fragment EditMultipleChoiceQuestionBlockForm_block on MultipleChoiceQuestionBlock {
      text
      choices {
        id
        text
        correct
      }
    }
  `,
});
