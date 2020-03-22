import React from "react";
import { Typography, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const SlidesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SlideCard = styled(Button)`
  width: 380px;
  height: 250px;
  background-color: white;
  border: 1.35px solid #002140;
  border-radius: 5px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SlideCardWrapper = styled.div`
  margin: 25px 0px;
`;

const CreateSlideCard = (props: any) => {
  return (
    <SlideCard>
      <PlusOutlined style={{ fontSize: "40px" }} />
    </SlideCard>
  );
};

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmit: any;
  onCancel: any;
};
const CreateSlideModal = ({
  title,
  visible,
  onSubmit,
  onCancel
}: ModalProps) => (
  <Modal visible={visible} title={title} onOk={onSubmit} onCancel={onCancel}>
    <p>Some contents...</p>
  </Modal>
);

enum PageState {
  Default,
  CreateSlide
}
type SlidesPageProps = {};
export const SlidesPage = (props: SlidesPageProps): JSX.Element => {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.Default
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          title="Choose a layout"
          visible={pageState === PageState.CreateSlide}
          onSubmit={() => console.log("Submitted")}
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
