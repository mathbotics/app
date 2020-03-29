import React, { useState } from "react";
import { Modal, Layout } from "antd";
import styled from "styled-components";
import {
  GenericSlide as Slide,
  Type as SlideType
} from "../components/slides/GenericSlide";
import {
  SlidesSidebar,
  SlideMenuItem
} from "../components/hocs/Sidebar/withSlidesSidebar";

const ModalBodyWrapper = styled(Layout.Content)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ModalSlideWrapper = styled.div`
  width: 300px;
  height: 200px !important;
`;
type ModalPreviewSlideType = {
  type: SlideType;
  title: string;
  description: string;
};
type ModalProps = {
  title: string;
  visible: boolean;
  onSubmit: (type: SlideType) => void;
  onCancel: any;
};
const CreateSlideModal = ({
  title,
  visible,
  onSubmit,
  onCancel
}: ModalProps) => {
  const [selected, setSelected] = useState<SlideType>(SlideType.UNKNOWN);

  const previewSlides: ModalPreviewSlideType[] = [
    {
      type: SlideType.SINGLE,
      title: "Single Slide",
      description:
        "A single slide, perfect for a single piece of content like and image or some reading material."
    },
    {
      type: SlideType.HALF,
      title: "Half Slide",
      description:
        "A slide made for 2 pieces of content. Great for some context on the left and interactive material on the right."
    }
  ];

  return (
    <Modal
      width={1100}
      visible={visible}
      title={title}
      onOk={() => onSubmit(selected)}
      onCancel={onCancel}
    >
      <ModalBodyWrapper>
        {previewSlides.map(
          (
            { type, title, description }: ModalPreviewSlideType,
            index: number
          ) => (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "20px"
              }}
            >
              <ModalSlideWrapper key={index} onClick={() => setSelected(type)}>
                <Slide preview selected={type === selected} type={type} />
              </ModalSlideWrapper>
              <h3 style={{ marginTop: "10px" }}>
                <u>{title}</u>
              </h3>
              <p style={{ width: 300, marginTop: "5px" }}>{description}</p>
            </div>
          )
        )}
      </ModalBodyWrapper>
    </Modal>
  );
};

enum PageState {
  Default,
  CreateSlide,
  EditSlide
}
type SlidesPageProps = {};
export const SlidesPage = (props: SlidesPageProps): JSX.Element => {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.Default
  );

  const slides: SlideMenuItem[] = [];
  return (
    <SlidesSidebar
      slides={slides}
      onCreate={() => setPageState(PageState.CreateSlide)}
      onEdit={() => setPageState(PageState.EditSlide)}
    >
      <>
        {pageState === PageState.CreateSlide && (
          <CreateSlideModal
            title="Choose a slide layout"
            visible={pageState === PageState.CreateSlide}
            onSubmit={(type: SlideType) => {
              console.log(`Intent to create slide with type ${type}`);
              setPageState(PageState.Default);
            }}
            onCancel={() => setPageState(PageState.Default)}
          />
        )}
      </>
    </SlidesSidebar>
  );
};
