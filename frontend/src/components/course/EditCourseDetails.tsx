import React from "react";
import { Layout } from "antd";
import { Store } from "rc-field-form/lib/interface";

import { UpdateCourseForm } from "../form/UpdateCourseForm";

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
      <UpdateCourseForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Layout>
  );
};
