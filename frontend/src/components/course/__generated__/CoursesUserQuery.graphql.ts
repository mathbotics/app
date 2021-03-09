/* tslint:disable */
/* eslint-disable */
/* @relayHash cd16e6375874e719b837bd5c23e7db0d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesUserQueryVariables = {};
export type CoursesUserQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
        readonly " $fragmentRefs": FragmentRefs<"CoursesList_viewer">;
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
    ...CoursesList_viewer
  }
}

fragment CourseCard_viewer on User {
  __typename
}

fragment CoursesList_viewer on User {
  __typename
  ...CourseCard_viewer
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
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
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CoursesList_viewer",
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
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CoursesUserQuery",
    "id": null,
    "text": "query CoursesUserQuery {\n  viewer {\n    __typename\n    ...CoursesList_viewer\n  }\n}\n\nfragment CourseCard_viewer on User {\n  __typename\n}\n\nfragment CoursesList_viewer on User {\n  __typename\n  ...CourseCard_viewer\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3d457bd05289e5b6921a246855cd8501';
export default node;
