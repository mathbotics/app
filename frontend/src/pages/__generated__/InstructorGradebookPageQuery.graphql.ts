/* tslint:disable */
/* eslint-disable */
/* @relayHash 5f6f8bb7be58d365ebc995f7cc142b46 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebookPageQueryVariables = {};
export type InstructorGradebookPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_lessons">;
};
export type InstructorGradebookPageQuery = {
    readonly response: InstructorGradebookPageQueryResponse;
    readonly variables: InstructorGradebookPageQueryVariables;
};



/*
query InstructorGradebookPageQuery {
  ...InstructorGradebook_lessons
}

fragment InstructorGradebookTable_lessons on Query {
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment InstructorGradebook_lessons on Query {
  ...InstructorGradebookTable_lessons
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
    "name": "InstructorGradebookPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "InstructorGradebook_lessons",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InstructorGradebookPageQuery",
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
    "name": "InstructorGradebookPageQuery",
    "id": null,
    "text": "query InstructorGradebookPageQuery {\n  ...InstructorGradebook_lessons\n}\n\nfragment InstructorGradebookTable_lessons on Query {\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment InstructorGradebook_lessons on Query {\n  ...InstructorGradebookTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c55d789b63feed8b565fa4b7b492a8f2';
export default node;
