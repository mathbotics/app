import React from "react";
import { Layout, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { EditorSlidePreview_slide } from "./__generated__/EditorSlidePreview_slide.graphql";
import { Block } from "../../types/Block";
import Slide from "./Slide";
import styled from "styled-components";

const { Content } = Layout;

const Wrapper = styled(Layout.Content)`
  height: 100%;
  padding: 10px;
`;

type Props = {
  onSelectBlock: (block: Block) => void; // This onClick should return a block to edit
  slide?: EditorSlidePreview_slide;
};
const EditorSlidePreview = ({ onSelectBlock, slide }: Props) => (
  <Layout>
    <Content style={{ margin: "10px", height: "auto" }}>
      {slide ? (
        <Wrapper>
          <Slide slide={slide} />
        </Wrapper>
      ) : (
        <Result
          icon={<SmileOutlined />}
          title="Get started by creating a slide!"
        />
      )}
    </Content>
  </Layout>
);

export default createFragmentContainer(EditorSlidePreview, {
  slide: graphql`
    fragment EditorSlidePreview_slide on Slide {
      ...Slide_slide
    }
  `
});
