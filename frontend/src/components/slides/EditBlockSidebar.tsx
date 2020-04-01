import React from "react";
import { Layout } from "antd";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditBlockSidebar_block } from "./__generated__/EditBlockSidebar_block.graphql";

const { Sider } = Layout;
type Props = {
  block?: EditBlockSidebar_block;
};
const EditBlockSidebar = (props: Props) => {
  return (
    <Layout>
      <Sider theme={"light"} width={300} />
    </Layout>
  );
};

export default createFragmentContainer(EditBlockSidebar, {
  block: graphql`
    fragment EditBlockSidebar_block on Block {
      ... on MultipleChoiceQuestionBlock {
        id
      }
      ... on TextBlock {
        id
      }
    }
  `
});
