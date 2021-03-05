/* tslint:disable */
/* eslint-disable */
/* @relayHash acabde4ddb588e20d5586599be1e75d6 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type withSidebarQueryVariables = {};
export type withSidebarQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"withSidebar_viewer">;
    };
};
export type withSidebarQuery = {
    readonly response: withSidebarQueryResponse;
    readonly variables: withSidebarQueryVariables;
};



/*
query withSidebarQuery {
  viewer {
    __typename
    ...withSidebar_viewer
  }
}

fragment withSidebar_viewer on User {
  role: __typename
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "withSidebarQuery",
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
            "name": "withSidebar_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "withSidebarQuery",
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
    "name": "withSidebarQuery",
    "id": null,
    "text": "query withSidebarQuery {\n  viewer {\n    __typename\n    ...withSidebar_viewer\n  }\n}\n\nfragment withSidebar_viewer on User {\n  role: __typename\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '1cbb63b7227bdf305f28d5aa6d5b3177';
export default node;
