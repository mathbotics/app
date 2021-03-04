/* tslint:disable */
/* eslint-disable */
/* @relayHash a751f069b9dc73983d73443484c58222 */

import { ConcreteRequest } from "relay-runtime";
export type LoginInput = {
    password: string;
    username: string;
};
export type LogInMutationVariables = {
    input: LoginInput;
};
export type LogInMutationResponse = {
    readonly logIn: {
        readonly firstName: string;
        readonly lastName: string;
        readonly username: string;
        readonly email?: string;
    };
};
export type LogInMutation = {
    readonly response: LogInMutationResponse;
    readonly variables: LogInMutationVariables;
};



/*
mutation LogInMutation(
  $input: LogInInput!
) {
  logIn(input: $input) {
    __typename
    firstName
    lastName
    username
    ... on Instructor {
      email
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
},
v5 = {
  "kind": "InlineFragment",
  "type": "Instructor",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
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
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id", //"name": "user"
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogInMutation",
    "id": null,
    "text": "mutation LogInMutation(\n  $input: LoginInput!\n) {\n  logIn(input: $input) {\n   user\n    {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'dcfda32b7251108bf75298326f5a5bfc';
export default node;
