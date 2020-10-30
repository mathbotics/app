import React from 'react';
import { Typography, Layout, Alert } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

import styled from 'styled-components';
import { commit as commitSendResetPasswordEmail } from '../graphql/mutations/SendResetPasswordEmailMutation';
import { ForgotPasswordForm } from '../components/form';
import { SendResetPasswordEmailMutationResponse } from '../graphql/mutations/__generated__/SendResetPasswordEmailMutation.graphql';
import { AppLogo } from '../components/icons';
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  height: 100%;
`;
const Wrapper = styled(Layout.Content)`
flex: initial;
width: 20em;
margin: auto;
padding: 25px 20px;
border-radius: 10px;
background-color: #fff;
box-shadow: 1px 4px 38px -2px rgba(105, 103, 103, 0.1);
text-align: center;
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
    <StyledLayout>
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
       <AppLogo height="150px" />
      <h3> Forgot Password </h3>

      <ForgotPasswordForm
        onSubmit={onSubmitHandler}
        onSubmitError={onSubmitErrorHandler}
      />
      <a href="/login"> Or Cancel</a>
      </Wrapper>
    </StyledLayout>
  );
};
