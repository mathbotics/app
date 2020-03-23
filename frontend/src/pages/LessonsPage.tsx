import React, { useState } from "react";
import { Typography, Button, Modal, Alert } from "antd";
import { CreateLessonForm } from "../components/form";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { commit as commitCreateOneLessonMutation } from "../graphql/mutations/CreateOneLessonMutation";
import { CreateOneLessonMutationResponse } from "../graphql/mutations/__generated__/CreateOneLessonMutation.graphql";

const { Title } = Typography;

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

  const onCreateLessonMutationSuccess = (
    response: CreateOneLessonMutationResponse
  ) => {
    console.log({ id: response.createOneLesson.id });
    setPageState(PageState.CreateLessonSuccess);
  };

  const onCreateLessonMutationFailure = (error: Error) => {
    setPageState(PageState.CreateLessonError);
    console.log(error);
  };

  const onCreateLessonHandler = ({ title }: Store): void => {
    setPageState(PageState.CreatingLesson);
    commitCreateOneLessonMutation(
      { data: { title } },
      onCreateLessonMutationSuccess,
      onCreateLessonMutationFailure
    );
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
    </>
  );
};
