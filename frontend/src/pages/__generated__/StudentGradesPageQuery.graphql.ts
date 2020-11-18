/* tslint:disable */
/* eslint-disable */
/* @relayHash 6ad089b681400146caf392b4f51a9a72 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGradesPageQueryVariables = {};
export type StudentGradesPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_lessons">;
};
export type StudentGradesPageQuery = {
    readonly response: StudentGradesPageQueryResponse;
    readonly variables: StudentGradesPageQueryVariables;
};



/*
query StudentGradesPageQuery {
  ...StudentGrades_lessons
}

fragment StudentGradesTable_lessons on Query {
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment StudentGrades_lessons on Query {
  ...StudentGradesTable_lessons
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
    "name": "StudentGradesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "StudentGrades_lessons",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StudentGradesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StudentGradesPageQuery",
    "id": null,
    "text": "query StudentGradesPageQuery {\n  ...StudentGrades_lessons\n}\n\nfragment StudentGradesTable_lessons on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment StudentGrades_lessons on Query {\n  ...StudentGradesTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '750f3731a313abf7a981d9d0b5300da0';
export default node;
