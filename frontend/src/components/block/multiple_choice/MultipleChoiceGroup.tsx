import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer, DataID, fetchQuery } from 'react-relay';
import style from 'styled-components';
import { MultipleChoiceGroup_block } from './__generated__/MultipleChoiceGroup_block.graphql';
import { setConstantValue } from 'typescript';
import { useState } from 'react';
import RadioGroup from 'antd/lib/radio/group';
import { Store } from 'rc-field-form/lib/interface';
import { commit as commitCreateMultipleChoiceQuestionResponseMutation } from '../../../graphql/mutations/CreateMultipleChoiceQuestionResponseMutation';
import { environment } from "../../../graphql/relay";
import MultipleChoiceQuestionBlock from './MultipleChoiceQuestionBlock';
import EditMultipleChoiceQuestionBlockForm from './EditMultipleChoiceQuestionBlockForm';


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

//choice
const [choice, setchoice] = useState<String>(); //used to be RadioGroup type
const [choiceId, setChoiceId] = useState<String>();
const [defaultChoice, setDefaultChoice] = useState<String>();

//viewer
const [viewer, setViewer] = useState<String>();

//block
const [blockId, setBlockId] = useState<String>();


React.useEffect(() => {
  //handle choiceId, technically this choiceId is the value of choice too...
  //var temp = new RadioGroup(block.responses[0].multipleChoiceQuestionChoiceId);
  //modify choice
  var responsesSize = block.responses.length;
  //var currentViewer = fetchCurrentViewer();
  var indexOfStudentinResponses = 0;
  console.log(viewer);
  
  if(responsesSize == 0) {
    //setChoiceId('');
    setchoice('');
    setDefaultChoice('');
  }
  else {
    setchoice(block.responses[responsesSize-1].multipleChoiceQuestionChoiceId);
    setDefaultChoice(block.responses[responsesSize-1].multipleChoiceQuestionChoiceId);
  }

}, [block]);

/*
viewer is the current user
mcblocks is the array of all multipleChoiceQuestionBlockIds
block down in fragment is the current BlockId, but not the multipleChoiceQuestionBlockId
*/
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

/*
function fetchTestQuery() {
fetchQuery(environment, mainQuery, {}).then((data: any) => {
//get the currently logged in instructor that's creating the course
//const data = data;
const viewerId = data.viewer.id;
const viewerTypename = data.viewer.__typename
//setBlockId(multipleChoiceQuestionBlockId);
//console.log("data inside the mainQuery:", data);
//the thing above is from the mainQuery above
console.log("query viewer typeName: ", viewerTypename);
//the thing below is the fragment below
block.responses.forEach(responses => {
  console.log("fragment response id: ", responses.id);
  console.log("fragment response studentId: ", responses.studentId);
  console.log("fragment response multipleChoiceQuestionBlockId: ", responses.multipleChoiceQuestionBlockId);
  console.log("fragment response multipleChoiceQuestionChoiceId: ", responses.multipleChoiceQuestionChoiceId);
});


//console.log("fragment reponses:", block.responses.id);

})
}
*/

const onSubmit = ({ id, multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId}: Store) => {
  fetchQuery(environment, mainQuery, {}).then((data: any) => {
    studentId = data.viewer.id; //studentId from query
    const blockId = block.id; //fix the naming of this blockId in the future, this isn't really multipleChoiceQuestionBlockId, from fragment below
    multipleChoiceQuestionChoiceId = choiceId; //ChoiceId from state
    commitCreateMultipleChoiceQuestionResponseMutation(
    {input: { blockId, multipleChoiceQuestionChoiceId, studentId}},
    onSubmitSuccess,
    onSubmitError,
  );
  })

  }
  const onSubmitSuccess = () => {console.log("Sucess on commitCreateMultipleChoiceQuestionResponseMutation")};
  const onSubmitError = () => {console.log("Error on commitCreateMultipleChoiceQuestionResponseMutation")};

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
    console.log(event.target.value); //event.target.value is choiceId
    setchoice(event.target.value);
    setChoiceId(event.target.value.toString());
    setBlockId(block.id);
    /*
    console.log("Testing current fragment block id: ", block.id);
    console.log("Testing current fragment block __typename: ", block.__typename);
    */
    //HERE
    //fetchTestQuery();

  }
};

/*
  MODIFY or CREATE a new mutation just to update the single response in responses. what happens is the database retrieves all
  the responses in a particular block. so either the mutation updates the first entry or idk your problem...
  I will call responses[last], you guys handle the updating that entry in the database.
*/

//adding id below gives me the Block blockId, but not the MultipleChoiceQuestionBlockId
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
});
