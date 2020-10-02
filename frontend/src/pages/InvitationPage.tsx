import React from 'react';
import { Typography, Layout, Alert } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

import { commit as commitSendInvitationEmail } from '../graphql/mutations/SendInvitationEmailMutation';
import { InvitationForm } from '../components/form';
import { SendInvitationEmailMutationResponse } from '../graphql/mutations/__generated__/SendInvitationEmailMutation.graphql';
import styled from 'styled-components';

const { Title } = Typography;

const Wrapper = styled(Layout.Content)`
  width: 400px;
`;
//Alert component
const SAlert = styled(Alert)`
  margin-bottom: 20px;
`;
//Invitation state
enum InvitationState {
  DEFAULT,
  SUCCESS,
  FAILURE,
  VALIDATING,
}

type Props = {};
export const InvitationPage = (props: Props) => {
  /*
  TODO
  Invitation state is not being used
  Maybe there will be future use for it
   */
  // eslint-disable-next-line
  const [invitationState, setInvitationState] = React.useState<InvitationState>(
    InvitationState.DEFAULT,
  );

  const onInvitationSuccess = (
    response: SendInvitationEmailMutationResponse,
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
      onInvitationFailure,
    );
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity): void => {
    setInvitationState(InvitationState.FAILURE);
    console.log({ error });
  };
//invitation form
  return (
    <Wrapper>
      {invitationState === InvitationState.SUCCESS && (
        //send success alert if email was sent seuccessfuly
        <SAlert
          message="Invitation sent"
          type="success"
          showIcon
          closable
        />
      )}
      
      {invitationState === InvitationState.FAILURE && (
        //send error alert if email wasn't sent
        <SAlert
          message="There was an error"
          type="error"
          showIcon
          closable
        />
      )}
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
