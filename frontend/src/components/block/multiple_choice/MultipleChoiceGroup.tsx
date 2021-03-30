import React from 'react';
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
const [choice, setchoice] = useState<RadioGroup>();
const [choiceId, setChoiceId] = useState<String>();

//block
const [blockId, setBlockId] = useState<String>();


/*
React.useEffect(() => {
  setFieldsValue({
    id: block?.choices[0].id ?? '',
    body: block?.choices[0].text ?? '',
  });
}, [block, setFieldsValue]);
*/

/*
viewer is the current user
mcblocks is the array of all multipleChoiceQuestionBlockIds
block down in fragment is the current BlockId, but not the multipleChoiceQuestionBlockId
*/
const mainQuery = graphql`
  query MultipleChoiceGroupQuery {
    viewer {
      id
    }
    mcblocks {
        __typename
        id
      }
  }
`;

//this query is messing with the viewerQuery above?
/*
const MultipleChoiceQuestionBlockQuery = graphql`
  query MultipleChoiceGroupQuery {
    multipleChoiceQuestionBlock {
      id
    }
  }
`;
*/

function fetchedBlockIdQuery() {
fetchQuery(environment, mainQuery, {}).then((data: any) => {
//get the currently logged in instructor that's creating the course
const multipleChoiceQuestionBlockId = data.multipleChoiceQuestionBlock[0].id;
const viewerId = data.viewer.id;
setBlockId(multipleChoiceQuestionBlockId);
console.log("data inside the mainQuery, this should be block.id: ", multipleChoiceQuestionBlockId);
//console.log("data inside block.__typename: ", data.mcblocks[0].__typename);
})
}

/*
const onSubmit = ({ name, suggestedLevel }: Store) => {
  fetchQuery(environment, query, {}).then((data: any) => {
    //get the currently logged in instructor that's creating the course
  const viewerId = data.viewer.id
  commitCreateOneCourseMutation(
    { name, suggestedLevel, viewerId },
    onSubmitSuccess,
    onSubmitError,
  );
  })
  
}
*/


const onSubmit = ({ id, multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId}: Store) => {
  fetchQuery(environment, mainQuery, {}).then((data: any) => {
    studentId = data.viewer.id;

    multipleChoiceQuestionChoiceId = choiceId;
    commitCreateMultipleChoiceQuestionResponseMutation(
    {input: { multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId}},
    onSubmitSuccess,
    onSubmitError,
  );
  })

  }

/*
const onSubmit = ({}) => {
  console.log("Submit button without fetch or anything crazy does work");
}
*/

  const onSubmitSuccess = () => {console.log("Sucess on commitCreateMultipleChoiceQuestionResponseMutation")};
  const onSubmitError = () => {console.log("Error on commitCreateMultipleChoiceQuestionResponseMutation")};

  return (
    <>
  <Radio.Group onChange={(e: any) => radioTask(e)} value={choice}>
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
    console.log("Testing current fragment block id: ", block.id);
    console.log("Testing current fragment block __typename: ", block.__typename);

    //HERE
    fetchedBlockIdQuery();

    /*do any call to the backend to save choices, submitting with a submit
     button instead of calling after every radio option change will reduce
     server load*/

     //also radioTask needs to get the current response id, multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId  

     //grab choice which currently is event.target.value?

     //current issue, what is the current student logged in?

     //the fragement choices id is currently the MultipleChoiceQuestionChoiceId for some reason

     //the update call

  }
};

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
    }
  `,
});
