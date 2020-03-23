import React, { useState } from "react";
import { Typography, Button, Modal, Alert, Layout, Tooltip } from "antd";
import { ClockCircleOutlined, EditOutlined } from "@ant-design/icons";
import { CreateLessonForm } from "../components/form";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import styled from "styled-components";

const { Title } = Typography;

const LessonPreviewWrapper = styled(Layout.Content)`
  height: auto;
  width: 400px;
  border: 1px solid #ccc;
  margin: 20px;
  :hover {
    color: inherit;
  }
`;

const LessonsWrapper = styled(Layout.Content)`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;

type LessonPreviewProps = {
  id: string;
  title: string;
  slideCount: number;
  onClick: any;
};
const LessonPreview = ({
  id,
  title,
  slideCount,
  onClick
}: LessonPreviewProps) => {
  return (
    <LessonPreviewWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          flexDirection: "column",
          padding: "15px 25px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Tooltip title={title}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 700,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {title}
            </h1>
          </Tooltip>
          <Button style={{ border: "none" }} onClick={onClick}>
            <EditOutlined />
          </Button>
        </div>
        <p>
          <b>Suggested grade level:</b> 8th grade
        </p>
        <p>
          <ClockCircleOutlined /> 15min
        </p>

        <p>Slides: {slideCount}</p>
      </div>
    </LessonPreviewWrapper>
  );
};

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmit: any;
  onSubmitError: any;
  onCancel: any;
};
const CreateLessonModal = ({
  title,
  visible,
  onSubmit,
  onSubmitError,
  onCancel
}: ModalProps) => (
  <Modal
    visible={visible}
    title={title}
    onOk={onSubmit}
    onCancel={onCancel}
    footer={[]}
  >
    <CreateLessonForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
  </Modal>
);

type PageProps = {};
enum PageState {
  Default,
  CreateLesson,
  CreatingLesson,
  CreateLessonSuccess,
  CreateLessonError
}
export const LessonsPage = (props: PageProps): JSX.Element => {
  const [pageState, setPageState] = useState<PageState>(PageState.Default);

  // const onCreateLessonMutationSuccess = (
  //   response: CreateLessonMutationResponse
  // ) => setPageState(PageState.CreateLessonSuccess);

  // const onCreateLessonMutationFailure = (error: Error) => {
  //   setPageState(PageState.CreateLessonError);
  //   console.log(error);
  // };

  const onCreateLessonHandler = ({ title }: Store): void => {
    setPageState(PageState.CreatingLesson);

    /*
      Here you'll have title just import mutation from graphql
      Should look something like below
      Handlers are commeneted out above
    */
    // commitCreateLessonMutation(
    //   { title },
    //   onCreateLessonMutationSuccess,
    //   onCreateLessonMutationFailure
    // );
  };

  const onCreateLessonErrorHandler = (error: ValidateErrorEntity) => {
    setPageState(PageState.CreateLessonError);
    console.log(error);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={2}>Lessons</Title>
        <Button
          type="primary"
          onClick={() => setPageState(PageState.CreateLesson)}
          size="large"
          htmlType="submit"
        >
          Create a lesson
        </Button>
      </div>

      {pageState === PageState.CreateLessonError && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Unable to create lesson"
          type="error"
        />
      )}

      {pageState === PageState.CreateLessonSuccess && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Successfully created a lesson"
          type="success"
        />
      )}

      {pageState === PageState.CreateLesson && (
        <CreateLessonModal
          title="Create a lesson"
          visible={pageState === PageState.CreateLesson}
          onSubmit={onCreateLessonHandler}
          onSubmitError={onCreateLessonErrorHandler}
          onCancel={() => setPageState(PageState.Default)}
        />
      )}

      <LessonsWrapper>
        <LessonPreview
          id="0"
          title="NodeJS read files"
          slideCount={0}
          onClick={() => console.log("clicked")}
        />

        <LessonPreview
          id="0"
          title="NodeJS read files"
          slideCount={0}
          onClick={() => console.log("clicked")}
        />
        <LessonPreview
          id="0"
          title="NodeJS read filessaidiaoshdiasndnfia"
          slideCount={0}
          onClick={() => console.log("clicked")}
        />
      </LessonsWrapper>
    </>
  );
};
