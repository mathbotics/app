import React from "react";
import { Layout, Select } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditBlockSidebar_block } from "./__generated__/EditBlockSidebar_block.graphql";
import EditTextBlockForm from "../block/text/EditTextBlockForm";
import EditMultipleChoiceQuestionBlockForm from "../block/multiple_choice/EditMultipleChoiceQuestionBlockForm";

const { Sider } = Layout;
const { Option } = Select;

enum EditingBlockTypename {
  MultipleChoiceQuestionBlock = "MultipleChoiceQuestionBlock",
  TextBlock = "TextBlock",
}

type Props = { block: EditBlockSidebar_block };
const EditBlockSidebar = ({ block }: Props) => {
  const [editingBlockTypename, setEditingBlockTypename] = React.useState(
    block.__typename
  );

  return (
    <Sider theme={"light"} width={300}>
      <Select
        onChange={setEditingBlockTypename}
        defaultValue={block.__typename}
      >
        <Option value={EditingBlockTypename.MultipleChoiceQuestionBlock}>
          Multiple Choice
        </Option>
        <Option value={EditingBlockTypename.TextBlock}>Text</Option>
      </Select>
      {editingBlockTypename ===
        EditingBlockTypename.MultipleChoiceQuestionBlock && (
        <EditMultipleChoiceQuestionBlockForm
          {...(block.__typename === "MultipleChoiceQuestionBlock"
            ? { block }
            : {})}
        />
      )}
      {editingBlockTypename === EditingBlockTypename.TextBlock && (
        <EditTextBlockForm
          {...(block.__typename === "TextBlock" ? { block } : {})}
        />
      )}
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
    }
  `,
});
