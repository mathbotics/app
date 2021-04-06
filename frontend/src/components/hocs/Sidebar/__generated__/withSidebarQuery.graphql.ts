/* tslint:disable */
/* eslint-disable */
/* @relayHash 64e3f0746376e0b851920d9dfa20e144 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type withSidebarQueryVariables = {};
export type withSidebarQueryResponse = {
    readonly viewer: {
        readonly id: string;
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
    id
    ...withSidebar_viewer
  }
}

fragment withSidebar_viewer on User {
  role: __typename
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
          (v0/*: any*/),
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
          (v0/*: any*/),
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
    "text": "query withSidebarQuery {\n  viewer {\n    __typename\n    id\n    ...withSidebar_viewer\n  }\n}\n\nfragment withSidebar_viewer on User {\n  role: __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8cb271e442cd617f203714b78e309ad2';
export default node;
