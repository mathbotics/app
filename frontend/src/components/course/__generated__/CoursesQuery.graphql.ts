/* tslint:disable */
/* eslint-disable */
/* @relayHash 252fca65f47dbe4b1d6eaea78a45d376 */

import { ConcreteRequest } from "relay-runtime";
export type CoursesQueryVariables = {};
export type CoursesQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly __typename: string;
    };
};
export type CoursesQuery = {
    readonly response: CoursesQueryResponse;
    readonly variables: CoursesQueryVariables;
};



/*
query CoursesQuery {
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
    "name": "CoursesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CoursesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CoursesQuery",
    "id": null,
    "text": "query CoursesQuery {\n  viewer {\n    id\n    __typename\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '439067e0189031bc77ec36e888798dbd';
export default node;
