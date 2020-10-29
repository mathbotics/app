import React from 'react';
import { Typography, Layout, Alert } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

import styled from 'styled-components';
import { commit as commitSendResetPasswordEmail } from '../graphql/mutations/SendResetPasswordEmailMutation';
import { ForgotPasswordForm } from '../components/form';
import { SendResetPasswordEmailMutationResponse } from '../graphql/mutations/__generated__/SendResetPasswordEmailMutation.graphql';

const { Title } = Typography;

const Wrapper = styled(Layout.Content)`
  width: 400px;
`;
// Alert component
const SAlert = styled(Alert)`
  margin-bottom: 20px;
`;
// Invitation state
enum SentEmailState {
  DEFAULT,
  SUCCESS,
  FAILURE,
  VALIDATING,
}

type Props = {};
export const ForgotPasswordPage = (props: Props) => {
  /*
  TODO
  Invitation state is not being used
  Maybe there will be future use for it
   */
  // eslint-disable-next-line
  const [emailState, setEmailState] = React.useState<SentEmailState>(
    SentEmailState.DEFAULT,
  );

  const onInvitationSuccess = (
    response: SendResetPasswordEmailMutationResponse,
  ): void => setEmailState(SentEmailState.SUCCESS);

  const onInvitationFailure = (error: Error): void => {
    setEmailState(SentEmailState.FAILURE);
    console.log(error);
  };

  const onSubmitHandler = ({ email }: Store): void => {
    setEmailState(SentEmailState.VALIDATING);
    commitSendResetPasswordEmail(
      // { email, role },
      { email },
      onInvitationSuccess,
      onInvitationFailure,
    );
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity): void => {
    setEmailState(SentEmailState.FAILURE);
    console.log({ error });
  };
// invitation form
  return (
    <Wrapper>
      {emailState === SentEmailState.SUCCESS && (
        // send success alert if email was sent seuccessfuly
        <SAlert
          message="Email sent"
          type="success"
          showIcon
          closable
        />
      )}

      {emailState === SentEmailState.FAILURE && (
        // send error alert if email wasn't sent
        <SAlert
          message="There was an error"
          type="error"
          showIcon
          closable
        />
      )}
      <Title level={3} style={{ fontWeight: 700 }}>
        Forgot Password
      </Title>

      <ForgotPasswordForm
        onSubmit={onSubmitHandler}
        onSubmitError={onSubmitErrorHandler}
      />
    </Wrapper>
  );
};
