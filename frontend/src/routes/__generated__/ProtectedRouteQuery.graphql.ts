/* tslint:disable */
/* eslint-disable */
/* @relayHash 500c85559087f4a5f3a6633e30cc2a15 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProtectedRouteQueryVariables = {};
export type ProtectedRouteQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"ProtectedRoute_viewer">;
    };
};
export type ProtectedRouteQuery = {
    readonly response: ProtectedRouteQueryResponse;
    readonly variables: ProtectedRouteQueryVariables;
};



/*
query ProtectedRouteQuery {
  viewer {
    __typename
    ...ProtectedRoute_viewer
  }
}

fragment ProtectedRoute_viewer on User {
  role: __typename
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProtectedRouteQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "ProtectedRoute_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProtectedRouteQuery",
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
          {
            "kind": "ScalarField",
            "alias": "role",
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProtectedRouteQuery",
    "id": null,
    "text": "query ProtectedRouteQuery {\n  viewer {\n    __typename\n    ...ProtectedRoute_viewer\n  }\n}\n\nfragment ProtectedRoute_viewer on User {\n  role: __typename\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '57bbc3c77303fa6dc2b4aa460927ff67';
export default node;
