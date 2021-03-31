/* tslint:disable */
/* eslint-disable */
/* @relayHash 85b9a13cbcf2f44042f320b1b3cd9ee2 */

import { ConcreteRequest } from "relay-runtime";
export type MultipleChoiceGroupQueryVariables = {};
export type MultipleChoiceGroupQueryResponse = {
    readonly viewer: {
        readonly id: string;
    };
    readonly mcblocks: ReadonlyArray<{
        readonly __typename: string;
        readonly id: string;
    } | null> | null;
    readonly blocks: ReadonlyArray<{
        readonly id?: string;
    } | null> | null;
};
export type MultipleChoiceGroupQuery = {
    readonly response: MultipleChoiceGroupQueryResponse;
    readonly variables: MultipleChoiceGroupQueryVariables;
};



/*
query MultipleChoiceGroupQuery {
  viewer {
    __typename
    id
  }
  mcblocks {
    __typename
    id
  }
  blocks {
    __typename
    ... on MultipleChoiceQuestionBlock {
      id
    }
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
},
v1 = [
  (v0/*: any*/)
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  (v0/*: any*/)
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "mcblocks",
  "storageKey": null,
  "args": null,
  "concreteType": "MultipleChoiceQuestionBlock",
  "plural": true,
  "selections": (v3/*: any*/)
},
v5 = {
  "kind": "InlineFragment",
  "type": "MultipleChoiceQuestionBlock",
  "selections": (v1/*: any*/)
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MultipleChoiceGroupQuery",
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
        "selections": (v1/*: any*/)
      },
      (v4/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blocks",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MultipleChoiceGroupQuery",
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
        "selections": (v3/*: any*/)
      },
      (v4/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blocks",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MultipleChoiceGroupQuery",
    "id": null,
    "text": "query MultipleChoiceGroupQuery {\n  viewer {\n    __typename\n    id\n  }\n  mcblocks {\n    __typename\n    id\n  }\n  blocks {\n    __typename\n    ... on MultipleChoiceQuestionBlock {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '105bb6dde2350df9b50cb68c6cc968ea';
export default node;
