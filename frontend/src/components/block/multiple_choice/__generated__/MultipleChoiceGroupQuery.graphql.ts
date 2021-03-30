/* tslint:disable */
/* eslint-disable */
/* @relayHash 53268f7dfa183a32ef0d5ace28c6b22e */

import { ConcreteRequest } from "relay-runtime";
export type MultipleChoiceGroupQueryVariables = {};
export type MultipleChoiceGroupQueryResponse = {
    readonly viewer: {
        readonly id: string;
    };
    readonly multipleChoiceQuestionBlock: ReadonlyArray<{
        readonly __typename: string;
        readonly id: string;
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
  multipleChoiceQuestionBlock {
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
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
  (v0/*: any*/)
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "multipleChoiceQuestionBlock",
  "storageKey": null,
  "args": null,
  "concreteType": "MultipleChoiceQuestionBlock",
  "plural": true,
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
        "selections": [
          (v0/*: any*/)
        ]
      },
      (v2/*: any*/)
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
        "selections": (v1/*: any*/)
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MultipleChoiceGroupQuery",
    "id": null,
    "text": "query MultipleChoiceGroupQuery {\n  viewer {\n    __typename\n    id\n  }\n  multipleChoiceQuestionBlock {\n    __typename\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4c6cb7c16792949b24166046a5786e9f';
export default node;
