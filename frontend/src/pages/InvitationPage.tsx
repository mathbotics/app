import React from "react";
import { Typography, Layout } from "antd";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";

import { commit as commitSendInvitationEmail } from "../graphql/mutations/SendInvitationEmailMutation";
import { InvitationForm } from "../components/form";
import { SendInvitationEmailMutationResponse } from "../graphql/mutations/__generated__/SendInvitationEmailMutation.graphql";
import styled from "styled-components";

const { Title } = Typography;

const Wrapper = styled(Layout.Content)`
  width: 400px;
`;

enum InvitationState {
  DEFAULT,
  SUCCESS,
  FAILURE,
  VALIDATING,
}

type Props = {};
export const InvitationPage = (props: Props) => {
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
    <Wrapper>
      <Title level={3} style={{ fontWeight: 700 }}>
        Invite User
      </Title>

      <InvitationForm
        onSubmit={onSubmitHandler}
        onSubmitError={onSubmitErrorHandler}
      />
    </Wrapper>
  );
};
