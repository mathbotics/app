import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer, DataID, fetchQuery } from 'react-relay';
import style from 'styled-components';
import { MultipleChoiceGroup_block } from './__generated__/MultipleChoiceGroup_block.graphql';
import { useState } from 'react';
import { Store } from 'rc-field-form/lib/interface';
import { commit as commitCreateMultipleChoiceQuestionResponseMutation } from '../../../graphql/mutations/CreateMultipleChoiceQuestionResponseMutation';
import { environment } from "../../../graphql/relay";


type MultipleChoiceChoiceProps = {
  id: string;
  value?: string;
  text?: string;
};
const MultipleChoiceChoice = ({
  text,
  id,
}: MultipleChoiceChoiceProps): JSX.Element => {
  const RadioButton = style(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
  background-color: #f0f2f5;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
  height: auto;
  margin: 10px 0px;
  `;
  return <RadioButton value={id}>{text}</RadioButton>;
};

const SubmitButton = style(Button)`
background-color: #f0f2f5;
`;

export type MultipleChoiceGroupProps = {
  onChange: (e: RadioChangeEvent) => void;
  choices?: Array<{
    id: string;
    value: string;
    text: string;
    correct: boolean;
  }>;

  selected: number;
};

type Props = { block: MultipleChoiceGroup_block };
const MultipleChoiceGroup = ({ block }: Props) => {
const [choice, setchoice] = useState<String>();
const [choiceId, setChoiceId] = useState<String>();
const [defaultChoice, setDefaultChoice] = useState<String>();
const [viewer, setViewer] = useState<String>();
const [blockId, setBlockId] = useState<String>();

React.useEffect(() => {
  var responsesSize = block.responses.length;
  var indexOfStudentinResponses = 0;
  
  if(responsesSize == 0) {
    setchoice('');
    setDefaultChoice('');
  }
  else {
    setchoice(block.responses[responsesSize-1].multipleChoiceQuestionChoiceId);
    setDefaultChoice(block.responses[responsesSize-1].multipleChoiceQuestionChoiceId);
  }

}, [block]);

const mainQuery = graphql`
  query MultipleChoiceGroupQuery {
    viewer {
      id
      __typename
    }
    mcblocks {
        __typename
        id
      }
    blocks {
      ...on MultipleChoiceQuestionBlock {
        id
      }
    }
  }
`;

function fetchCurrentViewer() {
  var viewerId = "";
  fetchQuery(environment, mainQuery, {}).then((data: any) => {
    viewerId = data.viewer.id;
  })
  return viewerId;
  }

function fetchCurrentViewerTypename() {
    var viewerTypeName = "";
    fetchQuery(environment, mainQuery, {}).then((data: any) => {
      viewerTypeName = data.viewer.__typename;
    })
    return viewerTypeName;
    }

const onSubmit = ({ id, multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId}: Store) => {
  fetchQuery(environment, mainQuery, {}).then((data: any) => {
    studentId = data.viewer.id; 
    const blockId = block.id; 
    multipleChoiceQuestionChoiceId = choiceId;
    commitCreateMultipleChoiceQuestionResponseMutation(
      {input: { blockId, multipleChoiceQuestionChoiceId, studentId}},
      onSuccess,
      onFailure,
    );
  })

  }
  const onSuccess = (response) => {
    if(response["createResponse"] !== null){
      console.log("correct answer");
    } else{
      console.log("incorrect answer");
    }
    window.location.reload();
  };
  const onFailure = (error) => {console.log(`Error in submit: ${JSON.stringify(error)}`)};

  return (
    <>
  <Radio.Group onChange={(e: any) => radioTask(e)} defaultValue={defaultChoice} value={choice}>
    {block.choices.map(({ id, text }, index: number) => (
      <MultipleChoiceChoice key={id} id={id} value={id} text={text} />
      ))}
  </Radio.Group>

  <SubmitButton onClick={onSubmit}>Submit Answer</SubmitButton>
  
  </>
);

  function radioTask(event){
    setchoice(event.target.value);
    setChoiceId(event.target.value.toString());
    setBlockId(block.id);
  }
};

export default createFragmentContainer(MultipleChoiceGroup, {
  block: graphql`
    fragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {
      id
      __typename
      choices {
        id
        text
        correct
      }
      responses {
        id
        multipleChoiceQuestionBlockId
        multipleChoiceQuestionChoiceId
        studentId
      }
    }
  `,
  // grading: graphql`
  //   fragment UpdateGradeFromAnswer on answerMultipleChoiceBlock {

  //   }
  // `,
});
