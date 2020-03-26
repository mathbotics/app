import React, { ReactNode } from "react";
import { Slide as SingleSlide } from "./SingleSlide";
import { Slide as HalfSlide } from "./HalfSlide";
export enum Type {
  SINGLE,
  HALF
}
type Props = {
  type: Type;
  children?: ReactNode;
  preview?: boolean;
  selected?: boolean;
};
export const GenericSlide = ({ type, children, preview, selected }: Props) => {
  const { SINGLE, HALF } = Type;
  switch (type) {
    case SINGLE:
      return <SingleSlide preview={preview} selected={selected} />;
    case HALF:
      return <HalfSlide preview={preview} selected={selected} />;
    default:
      return <div>Slide not implement{children}</div>;
  }
};
