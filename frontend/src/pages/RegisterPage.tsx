import React from 'react';
import { Layout, Alert } from 'antd';
import styled from 'styled-components';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Redirect, useParams } from 'react-router-dom';
import nullthrows from 'nullthrows';
import { RegisterForm } from '../components/form';
import { commit as commitRegisterUserMutation } from '../graphql/mutations/RegisterUserMutation';
import { RegisterUserMutationResponse } from '../graphql/mutations/__generated__/RegisterUserMutation.graphql';

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

type RegisterProps = {};
enum RegisterState {
  DEFAULT,
  SUCCESS,
  FAILURE,
  VALIDATING,
}
export const RegisterPage = (props: RegisterProps): JSX.Element => {
  const { token } = useParams();
  const [registerState, setRegisterState] = React.useState<RegisterState>(
    RegisterState.DEFAULT,
  );

  const onRegisterSuccess = (response: RegisterUserMutationResponse): void =>
    setRegisterState(RegisterState.SUCCESS);

  const onRegisterFailure = (error: Error): void => {
    setRegisterState(RegisterState.FAILURE);
    console.log(error);
  };

  const onSubmitHandler = ({
    firstName,
    lastName,
    username,
    password,
  }: Store): void => {
    setRegisterState(RegisterState.VALIDATING);
    commitRegisterUserMutation(
      { firstName, lastName, username, password, token: nullthrows(token) },
      onRegisterSuccess,
      onRegisterFailure,
    );
  };

  const onSubmitErrorHandler = (error: ValidateErrorEntity): void => {
    setRegisterState(RegisterState.FAILURE);
    console.log({ error });
  };
  return (
    <StyledLayout>
      {registerState === RegisterState.SUCCESS && <Redirect to="/login" />}

      <Content>
        {registerState === RegisterState.FAILURE && (
          <SAlert message="Unable to create account" type="error" />
        )}

        <h1>Register</h1>
        <RegisterForm
          onSubmit={onSubmitHandler}
          onSubmitError={onSubmitErrorHandler}
        />
      </Content>
    </StyledLayout>
  );
};
