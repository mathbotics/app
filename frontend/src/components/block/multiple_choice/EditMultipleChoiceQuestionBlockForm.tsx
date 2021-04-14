import React from 'react';
import { Input, Button } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import nullthrows from 'nullthrows';
import cuid from 'cuid';
import styled from 'styled-components';

import { EditMultipleChoiceQuestionBlockForm_block } from './__generated__/EditMultipleChoiceQuestionBlockForm_block.graphql';
import { commit as commitUpdateBlockToMultipleChoiceBlock } from '../../../graphql/mutations/UpdateBlockToMultipleChoiceBlockMutation';

const SpecialDiv = styled.div`
margin-bottom: .80em;
margin-top: .80em;
`;

const TitleDiv = styled.div`
margin-bottom: .75em;
margin-top: .75em;
`;

const SelectionDiv = styled.div`
border-bottom-style: dotted;
border-width: 5px;
border-color: black;
margin-bottom: 1em;
`;

const ButtonRow = styled.div`
display: flex;
justify-content: space-between;
padding-top:2%;
`;



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

  console.log("block in editform", block)
  console.log("block in editform", blockId)
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
    console.log({ choices, text }, "blockid", blockId);
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

  const onSaveSuccess = () => {window.location.reload()};
  const onSaveError = (e: Error) => {
    console.warn(e);
  };

  return (
    <>
    <TitleDiv>
      <h1>{text === '' ? "Question" : text}</h1>
      <Input.TextArea
        name="text"
        value={text}
        rows={4}
        onChange={({ target: { value } }) => setText(value)}
        placeholder="Question"
      />
    </TitleDiv>
      {choices.map(({ text, id, correct } : any ) => (
        <SpecialDiv>
          <h1>Answer: {text}</h1>
          <Input
            key={id}
            name="choice"
            type="text"
            placeholder="Choice Text"
            onChange={({ target: { value } }) => onChangeChoiceText(id, value)}
            value={text}
          />
          <ButtonRow>
            <Button type="danger" onClick={() => onClickRemoveChoice(id)}>Remove</Button>
            <Button type="primary" onClick={() => onClickSetCorrect(id)} disabled={correct}>
              Set correct
            </Button>
          </ButtonRow>
          <br/>
        </SpecialDiv>
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
