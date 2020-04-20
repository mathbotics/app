import React from "react";
import { Layout } from "antd";
import { Store } from "rc-field-form/lib/interface";

import { UpdateCourseForm } from "../form/UpdateCourseForm";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 350px;
`;
type Props = {
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
};
export const EditCourseDetails = ({
  onSubmitSuccess,
  onSubmitError,
}: Props) => {
  const onSubmit = ({ name }: Store) => console.log({ name });

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <FormWrapper>
        <UpdateCourseForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
      </FormWrapper>
    </Layout>
  );
};
