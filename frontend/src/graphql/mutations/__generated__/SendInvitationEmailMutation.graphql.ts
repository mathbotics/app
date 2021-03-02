/* tslint:disable */
/* eslint-disable */
/* @relayHash 2c5035140602b51a1a23cb090745e200 */

import { ConcreteRequest } from "relay-runtime";
export type SendInvitationEmailInput = {
    email?: string | null;
    role?: string | null;
};
export type SendInvitationEmailMutationVariables = {
    input: SendInvitationEmailInput;
};
export type SendInvitationEmailMutationResponse = {
    readonly sendInvitationEmail: string | null;
};
export type SendInvitationEmailMutation = {
    readonly response: SendInvitationEmailMutationResponse;
    readonly variables: SendInvitationEmailMutationVariables;
};



/*
mutation SendInvitationEmailMutation(
  $input: SendInvitationEmailInput!
) {
  sendInvitationEmail(input: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendInvitationEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "sendInvitationEmail",
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
    "name": "SendInvitationEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendInvitationEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendInvitationEmailMutation",
    "id": null,
    "text": "mutation SendInvitationEmailMutation(\n  $input: SendInvitationEmailInput!\n) {\n  sendInvitationEmail(input: $input)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '80afad1d1737b2f33597190aea594b47';
export default node;
