/* tslint:disable */
/* eslint-disable */
/* @relayHash e7c8608316769d30dda717eb58fcc390 */

import { ConcreteRequest } from "relay-runtime";
export type ResetPasswordInput = {
    password?: string | null;
    token?: string | null;
};
export type ResetPasswordMutationVariables = {
    input: ResetPasswordInput;
};
export type ResetPasswordMutationResponse = {
    readonly resetPassword: {
        readonly user: {
            readonly username: string;
        };
    } | null;
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
    user {
      __typename
      username
    }
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
        "concreteType": "ResetPasswordPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
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
        "concreteType": "ResetPasswordPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordMutation",
    "id": null,
    "text": "mutation ResetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    user {\n      __typename\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '37124bde4b1d78f912f866f030e8bc46';
export default node;
