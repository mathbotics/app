import React from 'react';
import { Layout, Alert } from 'antd';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';

import styled from 'styled-components';
import { Redirect, useParams } from 'react-router-dom';
import nullthrows from 'nullthrows';
import { ResetPasswordForm } from '../components/form';
import { AppLogo } from '../components/icons';
import { commit as commitResetPasswordMutation } from '../graphql/mutations/ResetPasswordMutation';
import { LogInMutationResponse } from '../graphql/mutations/__generated__/LogInMutation.graphql';

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
type LogInProps = {};
enum AuthState {
  DEFAULT,
  AUTHENTICATING,
  AUTHENTICATED,
  INVALID_ATTEMPT,
}
export const ResetPasswordPage = (props: LogInProps) => {
  const { token } = useParams();
  const [logInState, setLoginState] = React.useState<AuthState>(
    AuthState.DEFAULT,
  );

  const onLoginSuccess = (response: LogInMutationResponse) =>
    setLoginState(AuthState.AUTHENTICATED);

  const onLoginFailure = (error: Error) =>
    setLoginState(AuthState.INVALID_ATTEMPT);

  const onSubmitHandler = ({ password }: Store): void => {
    setLoginState(AuthState.AUTHENTICATING);
    commitResetPasswordMutation({ password, token: nullthrows(token) }, onLoginSuccess, onLoginFailure);
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity) => {
    setLoginState(AuthState.INVALID_ATTEMPT);
    console.log(error);
  };
// invitation form
  return (
    <StyledLayout>
      {logInState === AuthState.AUTHENTICATED && <Redirect to="/" />}
      <Wrapper>

        {logInState === AuthState.INVALID_ATTEMPT && (
        <SAlert
          message="Unable to verify username and password"
          type="error"
        />
        )}
        <AppLogo height="150px" />
        <h3> Reset Password </h3>

        <ResetPasswordForm
          onSubmit={onSubmitHandler}
          onSubmitError={onSubmitErrorHandler}
        />
      </Wrapper>
    </StyledLayout>
  );
};
