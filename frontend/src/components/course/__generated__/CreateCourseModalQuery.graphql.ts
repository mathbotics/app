/* tslint:disable */
/* eslint-disable */
/* @relayHash a649ee308077d22f7e39c44b7fd56e43 */

import { ConcreteRequest } from "relay-runtime";
export type CreateCourseModalQueryVariables = {};
export type CreateCourseModalQueryResponse = {
    readonly viewer: {
        readonly id: string;
    };
};
export type CreateCourseModalQuery = {
    readonly response: CreateCourseModalQueryResponse;
    readonly variables: CreateCourseModalQueryVariables;
};



/*
query CreateCourseModalQuery {
  viewer {
    __typename
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "CreateCourseModalQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCourseModalQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
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
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CreateCourseModalQuery",
    "id": null,
    "text": "query CreateCourseModalQuery {\n  viewer {\n    __typename\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0eb981f64ed74b615c1f3110baa6fd5d';
export default node;
