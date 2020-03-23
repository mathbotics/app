import React from "react";
import { Typography } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { CourseCreationForm } from "../components/form";

import { commit as commitCreateOneCourse } from "../graphql/mutations/CreateOneCourseMutation";
import { CreateOneCourseMutationResponse } from "../graphql/mutations/__generated__/CreateOneCourseMutation.graphql";

const { Title } = Typography;

type CreateCoursePageProps = {};
export const CreateCoursePage = (props: CreateCoursePageProps) => {
  const onInvitationSuccess = (
    response: CreateOneCourseMutationResponse
  ): void => console.log("Created course");

  const onInvitationFailure = (error: Error): void => {
    console.log(error);
  };

  const onSubmitHandler = ({ name, suggestedLevel }: Store): void => {
    commitCreateOneCourse(
      { name, suggestedLevel, lessonPlan: { create: {} } },
      onInvitationSuccess,
      onInvitationFailure
    );
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity): void => {
    console.log({ error });
  };

  return (
    <>
      <Title level={2}>Create Course</Title>

      <CourseCreationForm
        onSubmit={onSubmitHandler}
        onSubmitError={onSubmitErrorHandler}
      />
    </>
  );
};
