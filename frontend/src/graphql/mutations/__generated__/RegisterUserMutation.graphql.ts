/* tslint:disable */
/* eslint-disable */
/* @relayHash 448c31adf23dfd09ec68236fce53a510 */

import { ConcreteRequest } from "relay-runtime";
export type RegisterUserInput = {
    firstName: string;
    lastName: string;
    password: string;
    token: string;
    username: string;
};
export type RegisterUserMutationVariables = {
    input: RegisterUserInput;
};
export type RegisterUserMutationResponse = {
    readonly registerUser: {
        readonly username: string;
    };
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
    "name": "RegisterUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerUser",
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
    "name": "RegisterUserMutation",
    "id": null,
    "text": "mutation RegisterUserMutation(\n  $input: RegisterUserInput!\n) {\n  registerUser(input: $input) {\n    __typename\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '43a61fce27e0afc33450ed7f7bfa0a5c';
export default node;
