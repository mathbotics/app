/* tslint:disable */
/* eslint-disable */
/* @relayHash 42233861c78bfada65b93677b121a3ac */

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
            readonly id: string | null;
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
      id
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
  "name": "id",
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
              (v2/*: any*/)
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
              (v2/*: any*/)
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
    "text": "mutation LogInMutation(\n  $input: LoginInput!\n) {\n  logIn(input: $input) {\n    user {\n      __typename\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4368e42b2053a16671211143f142331a';
export default node;
