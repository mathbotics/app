import React, { ReactNode } from "react";
import SingleSlide from "./SingleSlide";
import HalfSlide from "./HalfSlide";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slide_slide } from "./__generated__/Slide_slide.graphql";
import { Block } from "../../types/Block";
import styled from "styled-components";

type WrapperProps = { preview?: boolean; selected?: boolean };
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  border: ${({ preview }: WrapperProps) => preview && "1px solid #ccc"};
  :hover {
    border: ${({ preview }: WrapperProps) => preview && "1px solid #f3f3f3cc"};
  }
`;
type Props = {
  type?: Slide_slide["__typename"];
  slide?: Slide_slide;
  children?: ReactNode;
  preview?: boolean;
  selected?: boolean;
  selectedBlock?: Block;
  style?: any;
  onSelectBlock?: (block: Block) => void;
};
const Slide = ({
  slide,
  type,
  children,
  preview,
  selected,
  onSelectBlock,
  selectedBlock
}: Props) => {
  switch (slide?.__typename ?? type) {
    case "SingleSlide":
      return (
        <Wrapper preview={preview}>
          <SingleSlide
            onSelectBlock={onSelectBlock}
            singleSlide={slide}
            preview={preview}
            selected={selected}
          />
        </Wrapper>
      );
    case "HalfSlide":
      return (
        <Wrapper preview={preview}>
          <HalfSlide
            onSelectBlock={onSelectBlock}
            selectedBlock={selectedBlock}
            halfSlide={slide}
            preview={preview}
            selected={selected}
          />
        </Wrapper>
      );
    default:
      return <div>Slide not implement{children}</div>;
  }
};

export default createFragmentContainer(Slide, {
  slide: graphql`
    fragment Slide_slide on Slide {
      __typename
      title
      ... on SingleSlide {
        ...SingleSlide_singleSlide
      }
      ... on HalfSlide {
        ...HalfSlide_halfSlide
      }
    }
  `
});
