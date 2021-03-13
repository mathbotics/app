/* tslint:disable */
/* eslint-disable */
/* @relayHash 8bf29857a38154ad8f99df13bdee7801 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesListRefetchQueryVariables = {};
export type CoursesListRefetchQueryResponse = {
    readonly courses: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
    }>;
};
export type CoursesListRefetchQuery = {
    readonly response: CoursesListRefetchQueryResponse;
    readonly variables: CoursesListRefetchQueryVariables;
};



/*
query CoursesListRefetchQuery {
  courses {
    id
    ...CourseCard_course
  }
}

fragment CourseCard_course on Course {
  id
  name
  suggestedLevel
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
    "name": "CoursesListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CourseCard_course",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CoursesListRefetchQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "suggestedLevel",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CoursesListRefetchQuery",
    "id": null,
    "text": "query CoursesListRefetchQuery {\n  courses {\n    id\n    ...CourseCard_course\n  }\n}\n\nfragment CourseCard_course on Course {\n  id\n  name\n  suggestedLevel\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c3374142b19ddc3fbc0f600766f61954';
export default node;
