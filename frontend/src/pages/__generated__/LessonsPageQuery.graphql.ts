/* tslint:disable */
/* eslint-disable */
/* @relayHash fcc6e49203ed2eea852394d6d101e0c3 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonsPageQueryVariables = {};
export type LessonsPageQueryResponse = {
    readonly lessons: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"LessonPreview_lesson">;
    }>;
};
export type LessonsPageQuery = {
    readonly response: LessonsPageQueryResponse;
    readonly variables: LessonsPageQueryVariables;
};



/*
query LessonsPageQuery {
  lessons {
    ...LessonPreview_lesson
  }
}

fragment LessonPreview_lesson on Lesson {
  id
  title
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LessonsPageQuery",
    "type": "Query",
    "metadata": null,
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
          {
            "kind": "FragmentSpread",
            "name": "LessonPreview_lesson",
            "args": null
          }
        ]
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
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LessonsPageQuery",
    "id": null,
    "text": "query LessonsPageQuery {\n  lessons {\n    ...LessonPreview_lesson\n  }\n}\n\nfragment LessonPreview_lesson on Lesson {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '8dc4e14a71751cbfe1a1665307726506';
export default node;
