import React, { useState } from "react";
import { Typography, Button, Modal, Layout, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {
  GenericSlide as Slide,
  Type as SlideType
} from "../components/slides/GenericSlide";

const { Title } = Typography;

const SlidesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SlideCard = styled(Layout.Content)`
  width: 380px;
  height: 250px;
  background-color: white;
  border: 1.35px solid #ccc;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    color: #40a9ff;
    border: 1.35px solid #40a9ff;
    cursor: pointer;
  }
`;

const SlideCardWrapper = styled.div`
  margin: 25px 0px;
`;

const CreateSlideCard = (props: any) => {
  return (
    <Tooltip title="Create a slide">
      <SlideCard>
        <PlusOutlined style={{ fontSize: "40px" }} />
      </SlideCard>
    </Tooltip>
  );
};

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

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Would like to load in the title of the lesson to display below */}
        <Title level={2}>Slides</Title>

        <Button
          type="primary"
          size="large"
          onClick={() => setPageState(PageState.CreateSlide)}
        >
          Create a Slide <PlusOutlined />
        </Button>
      </div>

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

      <SlidesWrapper>
        <SlideCardWrapper onClick={() => setPageState(PageState.CreateSlide)}>
          <CreateSlideCard />
        </SlideCardWrapper>
      </SlidesWrapper>
    </>
  );
};
