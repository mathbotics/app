/* tslint:disable */
/* eslint-disable */
/* @relayHash def8297dae7d4a92e147259582b50d5c */

import { ConcreteRequest } from "relay-runtime";
export type SendResetPasswordEmailInput = {
    email: string;
};
export type SendResetPasswordEmailMutationVariables = {
    input: SendResetPasswordEmailInput;
};
export type SendResetPasswordEmailMutationResponse = {
    readonly sendResetPasswordEmail: string;
};
export type SendResetPasswordEmailMutation = {
    readonly response: SendResetPasswordEmailMutationResponse;
    readonly variables: SendResetPasswordEmailMutationVariables;
};



/*
mutation SendResetPasswordEmailMutation(
  $input: SendResetPasswordEmailInput!
) {
  sendResetPasswordEmail(input: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendResetPasswordEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "sendResetPasswordEmail",
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SendResetPasswordEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendResetPasswordEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendResetPasswordEmailMutation",
    "id": null,
    "text": "mutation SendResetPasswordEmailMutation(\n  $input: SendResetPasswordEmailInput!\n) {\n  sendResetPasswordEmail(input: $input)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a5ccb22493b7e189c93cf97343a7f05a';
export default node;
