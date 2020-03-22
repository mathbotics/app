import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "../relay";
import { SendInvitationEmailInput } from "./__generated__/SendInvitationEmailMutation.graphql";

const mutation = graphql`
  mutation SendInvitationEmailMutation($input: SendInvitationEmailInput!) {
    sendInvitationEmail(input: $input)
  }
`;

function commit(
  input: SendInvitationEmailInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) {
  const variables = {
    input
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure
  });
}

export { commit };
