import React, { ReactNode } from "react";
import SingleSlide from "./SingleSlide";
import HalfSlide from "./HalfSlide";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slide_slide } from "./__generated__/Slide_slide.graphql";
import { Block } from "../../types/Block";

type Props = {
  type?: Slide_slide["__typename"];
  slide?: Slide_slide;
  children?: ReactNode;
  preview?: boolean;
  selected?: boolean;
  style?: any;
  onSelectBlock?: (block: Block) => void;
};
const Slide = ({
  slide,
  type,
  children,
  preview,
  selected,
  onSelectBlock
}: Props) => {
  switch (slide?.__typename ?? type) {
    case "SingleSlide":
      return (
        <SingleSlide
          onSelectBlock={onSelectBlock}
          singleSlide={slide}
          preview={preview}
          selected={selected}
        />
      );
    case "HalfSlide":
      return (
        <HalfSlide
          onSelectBlock={onSelectBlock}
          halfSlide={slide}
          preview={preview}
          selected={selected}
        />
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
