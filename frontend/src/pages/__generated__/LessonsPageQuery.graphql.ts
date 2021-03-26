/* tslint:disable */
/* eslint-disable */
/* @relayHash cdae6ff85924494d892db0c3b8d06735 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonsPageQueryVariables = {};
export type LessonsPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Lessons_lessons">;
};
export type LessonsPageQuery = {
    readonly response: LessonsPageQueryResponse;
    readonly variables: LessonsPageQueryVariables;
};



/*
query LessonsPageQuery {
  ...Lessons_lessons
}

fragment LessonsTable_lessons on Query {
  lessons {
    id
    title
    time
    difficultyLevel
    slides {
      __typename
      id
    }
  }
}

fragment Lessons_lessons on Query {
  ...LessonsTable_lessons
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
    "name": "LessonsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Lessons_lessons",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LessonsPageQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "time",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "difficultyLevel",
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
    "name": "LessonsPageQuery",
    "id": null,
    "text": "query LessonsPageQuery {\n  ...Lessons_lessons\n}\n\nfragment LessonsTable_lessons on Query {\n  lessons {\n    id\n    title\n    time\n    difficultyLevel\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment Lessons_lessons on Query {\n  ...LessonsTable_lessons\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '15c8f5d1033fe748d3c249a3f317410b';
export default node;
