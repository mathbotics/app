import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { InvitationForm } from "../components/form";

const StyledLayout = styled(Layout)`
  height: 100%;
`;

export const InvitationPage = () => {
  return (
    <StyledLayout>
      <h1>Invite User</h1>
      <InvitationForm onSubmit={() => {}} onSubmitError={() => {}} />
    </StyledLayout>
  );
};
