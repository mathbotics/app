/* tslint:disable */
/* eslint-disable */
/* @relayHash e14ea5e4c1954e73f1e5374b5a925134 */

import { ConcreteRequest } from "relay-runtime";
export type MultipleChoiceGroupQueryVariables = {};
export type MultipleChoiceGroupQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly __typename: string;
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
    id
    __typename
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "viewer",
  "storageKey": null,
  "args": null,
  "concreteType": null,
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ]
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "mcblocks",
  "storageKey": null,
  "args": null,
  "concreteType": "MultipleChoiceQuestionBlock",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    (v0/*: any*/)
  ]
},
v4 = {
  "kind": "InlineFragment",
  "type": "MultipleChoiceQuestionBlock",
  "selections": [
    (v0/*: any*/)
  ]
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
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blocks",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MultipleChoiceGroupQuery",
    "argumentDefinitions": [],
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blocks",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MultipleChoiceGroupQuery",
    "id": null,
    "text": "query MultipleChoiceGroupQuery {\n  viewer {\n    id\n    __typename\n  }\n  mcblocks {\n    __typename\n    id\n  }\n  blocks {\n    __typename\n    ... on MultipleChoiceQuestionBlock {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'dedfa14fa6c6341aecf8f1c4d169855b';
export default node;
