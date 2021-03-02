/* tslint:disable */
/* eslint-disable */
/* @relayHash 4a2b5c6fc59b209f267e61646bbae953 */

import { ConcreteRequest } from "relay-runtime";
export type LoginInput = {
    username?: string | null;
    password?: string | null;
};
export type LogInMutationVariables = {
    input: LoginInput;
};
export type LogInMutationResponse = {
    readonly logIn: {
        readonly user: {
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly username: string | null;
        };
    } | null;
};
export type LogInMutation = {
    readonly response: LogInMutationResponse;
    readonly variables: LogInMutationVariables;
};



/*
mutation LogInMutation(
  $input: LoginInput!
) {
  logIn(input: $input) {
    user {
      __typename
      firstName
      lastName
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
    "type": "LoginInput!",
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
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "LogInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logIn",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LogInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "logIn",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogInMutation",
    "id": null,
    "text": "mutation LogInMutation(\n  $input: LoginInput!\n) {\n  logIn(input: $input) {\n    user {\n      __typename\n      firstName\n      lastName\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ccee1dd9b93f8a87175e463c23377ed6';
export default node;
