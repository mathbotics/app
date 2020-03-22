import React from "react";
import { Layout, Alert } from "antd";
import styled from "styled-components";
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import { LogInForm } from "../components/form";
import { Redirect } from "react-router-dom";
import { commit as commitLoginMutation } from "../graphql/mutations/LogInMutation";
import { LogInMutationResponse } from "../graphql/mutations/__generated__/LogInMutation.graphql";

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const Content = styled(Layout.Content)`
  flex: initial;
  width: 20em;
  margin: auto;
  padding: 25px 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 4px 38px -2px rgba(105, 103, 103, 0.1);
  text-align: center;
`;

const SAlert = styled(Alert)`
  margin-bottom: 20px;
`;

type LogInProps = {};
enum AuthState {
  DEFAULT,
  AUTHENTICATING,
  AUTHENTICATED,
  INVALID_ATTEMPT
}
export const LoginPage = (props: LogInProps): JSX.Element => {
  const [logInState, setLoginState] = React.useState<AuthState>(
    AuthState.DEFAULT
  );

  const onLoginSuccess = (response: LogInMutationResponse) =>
    setLoginState(AuthState.AUTHENTICATED);

  const onLoginFailure = (error: Error) =>
    setLoginState(AuthState.INVALID_ATTEMPT);

  const onSubmitHandler = ({ username, password }: Store): void => {
    setLoginState(AuthState.AUTHENTICATING);
    commitLoginMutation({ username, password }, onLoginSuccess, onLoginFailure);
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity) => {
    setLoginState(AuthState.INVALID_ATTEMPT);
    console.log(error);
  };

  return (
    <StyledLayout>
      {logInState === AuthState.AUTHENTICATED && <Redirect to={"/"} />}

      <Content>
        {logInState === AuthState.INVALID_ATTEMPT && (
          <SAlert
            message="Unable to verify username and password"
            type="error"
          />
        )}

        <h1>Mathbotics</h1>
        <LogInForm
          onSubmit={onSubmitHandler}
          onSubmitError={onSubmitErrorHandler}
        />
      </Content>
    </StyledLayout>
  );
};
