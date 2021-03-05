/* tslint:disable */
/* eslint-disable */
/* @relayHash 4ad995e8cc0f1272411e49da6b301b3b */

import { ConcreteRequest } from "relay-runtime";
export type RegisterUserInput = {
    username?: string | null;
    token?: string | null;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
};
export type RegisterUserMutationVariables = {
    input: RegisterUserInput;
};
export type RegisterUserMutationResponse = {
    readonly registerUser: {
        readonly user: {
            readonly username: string;
        };
    } | null;
};
export type RegisterUserMutation = {
    readonly response: RegisterUserMutationResponse;
    readonly variables: RegisterUserMutationVariables;
};



/*
mutation RegisterUserMutation(
  $input: RegisterUserInput!
) {
  registerUser(input: $input) {
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
    "type": "RegisterUserInput!",
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
    "name": "RegisterUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegisterUserPayload",
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
    "name": "RegisterUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegisterUserPayload",
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
    "name": "RegisterUserMutation",
    "id": null,
    "text": "mutation RegisterUserMutation(\n  $input: RegisterUserInput!\n) {\n  registerUser(input: $input) {\n    user {\n      __typename\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f5aacb878b3529b054c4f50f33527754';
export default node;
