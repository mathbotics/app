import React from 'react';
import { Input, Button } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import nullthrows from 'nullthrows';
import cuid from 'cuid';

import { EditMultipleChoiceQuestionBlockForm_block } from './__generated__/EditMultipleChoiceQuestionBlockForm_block.graphql';
import { commit as commitUpdateBlockToMultipleChoiceBlock } from '../../../graphql/mutations/UpdateBlockToMultipleChoiceBlockMutation';

type Props = {
  block?: EditMultipleChoiceQuestionBlockForm_block;
  blockId: string;
};
const EditMultipleChoiceQuestionBlockForm = ({
  block,
  blockId,
}: Props): JSX.Element => {
  const [text, setText] = React.useState(block?.text ?? '');
  const [choices, setChoices] = React.useState(block?.choices ?? []);

  const onChangeChoiceText = (changedId: string, text: string) => {
    setChoices(
      choices.map(( {id, ...choice} : any) =>
        (id === changedId ? { ...choice, id, text } : { ...choice, id }),
      ),
    );
  };

  const onClickRemoveChoice = (idToRemove: string) => {
    const { correct } = nullthrows(choices.find(({ id } : any) => id === idToRemove));
    setChoices(
      choices.filter(({ id } : any) => id !== idToRemove).map((choice : any, i) =>
          (correct && i === 0 ? { ...choice, correct: true } : choice),
        ),
    );
  };

  const onClickSetCorrect = (idToSetCorrect: string) => {
    setChoices(
      choices.map(({ id, ...choice } : any) => ({
        ...choice,
        id,
        correct: id === idToSetCorrect,
      })),
    );
  };

  const onClickSave = () => {
    console.log({ choices, text });
    commitUpdateBlockToMultipleChoiceBlock(
      {
        input: {
          blockId,
          questionText: text,
          choices: [...choices.map(({ id, ...choice } : any) => ({ ...choice }))],
        },
      },
      onSaveSuccess,
      onSaveError,
    );
  };

  const onSaveSuccess = () => {};
  const onSaveError = (e: Error) => {
    console.warn(e);
  };

  return (
    <>
      <Input
        name="text"
        value={text}
        type="text"
        onChange={({ target: { value } }) => setText(value)}
        placeholder="Question Text"
      />
      {choices.map(({ text, id, correct } : any) => (
        <div>
          <Button onClick={() => onClickSetCorrect(id)} disabled={correct}>
            Set as correct
          </Button>
          <Input
            key={id}
            name="choice"
            type="text"
            placeholder="Choice Text"
            onChange={({ target: { value } }) => onChangeChoiceText(id, value)}
            value={text}
          />
          <Button onClick={() => onClickRemoveChoice(id)}>Remove</Button>
        </div>
      ))}
      <Button
        block
        onClick={() =>
          setChoices([
            ...choices,
            { text: '', id: cuid(), correct: choices.length === 0 },
          ])}
        type="link"
        size="large"
      >
        <b>Add choice</b>
      </Button>
      <Button
        onClick={onClickSave}
        block
        type="primary"
        size="large"
        disabled={choices.length < 1}
      >
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
