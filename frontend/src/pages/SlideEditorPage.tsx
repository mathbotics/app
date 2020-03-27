import React, { useState, useEffect } from "react";
import { Layout, Typography, Modal, Alert, Button } from "antd";
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
  border-radius: 2px;
  border: 1px solid #ccc;
  border: ${({ editing }: SlideWrapperProps) => editing && "2px solid #7e7e7e"};
`;

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
      text: "Your question goes here?",
      selected: 1,
      choices: [
        { value: "A", text: "No" },
        { value: "A", text: "Yes" }
      ]
    };

    setMultipleChoiceForm(form);
  }, []);

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

      <SlideWrapper editing={pageState == PageState.Editing}>
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
        >
          <Button
            onClick={() => setPageState(PageState.Editing)}
            type={"primary"}
            size={"large"}
          >
            Update content
          </Button>
        </SingleSlide>

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
