/* tslint:disable */
/* eslint-disable */
/* @relayHash 0263eeba3fce8dc9f246d6ef8f12705f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesUserQueryVariables = {};
export type CoursesUserQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"CoursesList_user">;
    };
};
export type CoursesUserQuery = {
    readonly response: CoursesUserQueryResponse;
    readonly variables: CoursesUserQueryVariables;
};



/*
query CoursesUserQuery {
  viewer {
    __typename
    ...CoursesList_user
  }
}

fragment CourseCard_user on User {
  role: __typename
}

fragment CoursesList_user on User {
  ...CourseCard_user
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CoursesUserQuery",
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
            "name": "CoursesList_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CoursesUserQuery",
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
    "name": "CoursesUserQuery",
    "id": null,
    "text": "query CoursesUserQuery {\n  viewer {\n    __typename\n    ...CoursesList_user\n  }\n}\n\nfragment CourseCard_user on User {\n  role: __typename\n}\n\nfragment CoursesList_user on User {\n  ...CourseCard_user\n}\n",
    "metadata": {}
  }
};
(node as any).hash = 'd5a71cd9fcc4dc2eb95a87874b750a0a';
export default node;
