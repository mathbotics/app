/* tslint:disable */
/* eslint-disable */
/* @relayHash 5976670a4374c599d84466dd8a42a5d2 */

import { ConcreteRequest } from "relay-runtime";
export type CourseCardQueryVariables = {};
export type CourseCardQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly __typename: string;
    };
};
export type CourseCardQuery = {
    readonly response: CourseCardQueryResponse;
    readonly variables: CourseCardQueryVariables;
};



/*
query CourseCardQuery {
  viewer {
    id
    __typename
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CourseCardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CourseCardQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CourseCardQuery",
    "id": null,
    "text": "query CourseCardQuery {\n  viewer {\n    id\n    __typename\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3a0717bfdeb8a9b38bd36f65281fe7ec';
export default node;
