import React, { useState, useEffect } from "react";
import { Layout, Typography, Modal, Alert } from "antd";
import { Slide as SingleSlide } from "../components/slides/SingleSlide";
import styled from "styled-components";
import { MultipleChoice, MultipleChoiceEdit } from "../components/block";
import { Store } from "rc-field-form/lib/interface";

const { Title } = Typography;

const Wrapper = styled(Layout.Content)``;
type SlideWrapperProps = { editing?: boolean };
const SlideWrapper = styled(Layout.Content)`
  display: flex;
  flex-direction: row;
  height: 80vh;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid red;
  border: ${({ editing }: SlideWrapperProps) => editing && "2px solid #7e7e7e"};
`;

// FORM
type EditSlideFormProps = {};
const EditSlideForm = (props: EditSlideFormProps) => {
  return <div>form</div>;
};

// MODAL
type ModalProps = {
  title: string;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
};
const EditSlideModal = ({
  title,
  onSubmitSuccess,
  onSubmitError,
  onCancel
}: ModalProps) => {
  const onSubmit = ({ title }: Store) => console.log(title);

  return (
    <Modal visible={true} title={title} onCancel={onCancel} footer={[]}>
      <EditSlideForm />
    </Modal>
  );
};

enum PageState {
  Preview,
  Editing,
  EditingError,
  EditingSuccess
}

type Props = {};
export const SlideEditorPage = (props: Props) => {
  const [pageState, setPageState] = useState<PageState>(PageState.Preview);

  const [multipleChoiceForm, setMultipleChoiceForm] = useState({
    text: "",
    selected: 0,
    choices: [
      {
        value: "",
        text: ""
      }
    ]
  });

  useEffect(() => {
    let form = {
      text: "Small pipi?kfnmopasnfopmapfinapsnmf",
      selected: 1,
      choices: [
        { value: "YES", text: "yes" },
        { value: "YES", text: "yes" },
        { value: "YES", text: "yes" },
        { value: "YES", text: "yes" },
        { value: "YES", text: "yes" },
        { value: "YES", text: "yes" }
      ]
    };

    setMultipleChoiceForm(form);
  }, []);

  console.log(multipleChoiceForm.selected);
  return (
    <Wrapper>
      <Title level={2}>Slide editor</Title>

      {pageState === PageState.EditingError && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Unable to edit the slide"
          type="error"
        />
      )}

      <SlideWrapper
        onClick={() => setPageState(PageState.Editing)}
        editing={pageState == PageState.Editing}
      >
        <SingleSlide
          Block={
            <MultipleChoice
              text={multipleChoiceForm.text}
              onChange={(value: number) => {
                setMultipleChoiceForm({
                  ...multipleChoiceForm,
                  selected: value
                });
              }}
              selected={multipleChoiceForm.selected}
              choices={multipleChoiceForm.choices}
            />
          }
        />
        {pageState == PageState.Editing && (
          <SingleSlide
            Block={
              <MultipleChoiceEdit
                text={multipleChoiceForm.text}
                onChange={({ text, choices }: any) => {
                  setMultipleChoiceForm({
                    ...multipleChoiceForm,
                    choices,
                    text
                  });
                }}
                selected={multipleChoiceForm.selected}
                choices={multipleChoiceForm.choices}
              />
            }
          />
        )}
      </SlideWrapper>
    </Wrapper>
  );
};
