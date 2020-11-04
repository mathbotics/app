/* tslint:disable */
/* eslint-disable */
/* @relayHash 2d2fb68c2c77349244402bf26d41b79d */

import { ConcreteRequest } from "relay-runtime";
export type ResetPasswordInput = {
    email: string;
    password: string;
};
export type ResetPasswordMutationVariables = {
    input: ResetPasswordInput;
};
export type ResetPasswordMutationResponse = {
    readonly resetPassword: {
        readonly username: string;
    };
};
export type ResetPasswordMutation = {
    readonly response: ResetPasswordMutationResponse;
    readonly variables: ResetPasswordMutationVariables;
};



/*
mutation ResetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
    __typename
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ResetPasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "resetPassword",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "resetPassword",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordMutation",
    "id": null,
    "text": "mutation ResetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    __typename\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '55f010d53262ac51e2a81080771ac325';
export default node;
