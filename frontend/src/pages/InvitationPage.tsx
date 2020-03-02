import React from "react";
import { Layout } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import styled from "styled-components";

import { commit as commitSendInvitationEmail } from "../graphql/mutations/SendInvitationEmailMutation";
import { InvitationForm } from "../components/form";
import { SendInvitationEmailMutationResponse } from "../graphql/mutations/__generated__/SendInvitationEmailMutation.graphql";

const StyledLayout = styled(Layout)`
  height: 100%;
`;

enum InvitationState {
  DEFAULT,
  SUCCESS,
  FAILURE,
  VALIDATING
}

export const InvitationPage = () => {
  const [invitationState, setInvitationState] = React.useState<InvitationState>(
    InvitationState.DEFAULT
  );

  const onInvitationSuccess = (
    response: SendInvitationEmailMutationResponse
  ): void => setInvitationState(InvitationState.SUCCESS);

  const onInvitationFailure = (error: Error): void => {
    setInvitationState(InvitationState.FAILURE);
    console.log(error);
  };

  const onSubmitHandler = ({ email, role }: Store): void => {
    setInvitationState(InvitationState.VALIDATING);
    commitSendInvitationEmail(
      { email, role },
      onInvitationSuccess,
      onInvitationFailure
    );
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity): void => {
    setInvitationState(InvitationState.FAILURE);
    console.log({ error });
  };

  return (
    <StyledLayout>
      <h1>Invite User</h1>
      <InvitationForm
        onSubmit={onSubmitHandler}
        onSubmitError={onSubmitErrorHandler}
      />
    </StyledLayout>
  );
};
