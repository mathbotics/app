import React from 'react';
import { Layout, Tabs } from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';

import { EditBlockSidebar_block } from './__generated__/EditBlockSidebar_block.graphql';
import EditTextBlockForm from '../block/text/EditTextBlockForm';
import EditMultipleChoiceQuestionBlockForm from '../block/multiple_choice/EditMultipleChoiceQuestionBlockForm';

const TabPane = Tabs.TabPane;
const { Sider } = Layout;
// const { Option } = Select;

const SelectionDiv = styled.div`
border-width: 2.5px;
border-color: #40a9ff;
padding-bottom: .5em;
margin-bottom: .5em;
padding-left: 4%;
`;

enum EditingBlockTypename {
  MultipleChoiceQuestionBlock = 'MultipleChoiceQuestionBlock',
  TextBlock = 'TextBlock',
}

type Props = { block: EditBlockSidebar_block };
const EditBlockSidebar = ({ block }: Props) => {
  function tabSelection(key){
    if(key === "1"){
      setEditingBlockTypename("MultipleChoiceQuestionBlock");
    } else if(key === "2"){
      setEditingBlockTypename("TextBlock");
    }
    console.log(key);
  }
  const [editingBlockTypename, setEditingBlockTypename] = React.useState(
    "MultipleChoiceQuestionBlock",
  );

  return (
    <Sider theme="light" width="300">
      <SelectionDiv>
        <Tabs
          type="card"
          onChange={tabSelection}
          // defaultValue={block.__typename}
        >
          {/* Multiple Choice */}
          <TabPane tab="Multiple Choice" key="1" forceRender={true}>
          {editingBlockTypename ===
            EditingBlockTypename.MultipleChoiceQuestionBlock && (
            <EditMultipleChoiceQuestionBlockForm
              // @ts-ignore
              blockId={block.id}
              {...(block.__typename === 'MultipleChoiceQuestionBlock'
                ? { block }
                : {})}
            />
          )}
          </TabPane>
          {/* Text */}
          <TabPane tab="Text" key="2">
          {editingBlockTypename === EditingBlockTypename.TextBlock && (
            <EditTextBlockForm
              // @ts-ignore
              blockId={block.id}
              {...(block.__typename === 'TextBlock' ? { block } : {})}
            />
          )}
          </TabPane>
        </Tabs>
      </SelectionDiv>
    </Sider>
  );
};

export default createFragmentContainer(EditBlockSidebar, {
  block: graphql`
    fragment EditBlockSidebar_block on Block {
      __typename
      ... on MultipleChoiceQuestionBlock {
        id
        ...EditMultipleChoiceQuestionBlockForm_block
      }
      ... on TextBlock {
        id
        ...EditTextBlockForm_block
      }
      ... on EmptyBlock {
        id
      }
    }
  `,
});
