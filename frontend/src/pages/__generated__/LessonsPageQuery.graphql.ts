/* tslint:disable */
/* eslint-disable */
/* @relayHash bc85de15421dd3daa42833d86ad01c4d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonsPageQueryVariables = {};
export type LessonsPageQueryResponse = {
    readonly lessons: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"LessonPreview_lesson">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"CreateLessonModalRefetch_test">;
};
export type LessonsPageQuery = {
    readonly response: LessonsPageQueryResponse;
    readonly variables: LessonsPageQueryVariables;
};



/*
query LessonsPageQuery {
  ...CreateLessonModalRefetch_test
  lessons {
    ...LessonPreview_lesson
  }
}

fragment CreateLessonModalRefetch_test on Query {
  lessons {
    id
    title
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
      },
      {
        "kind": "FragmentSpread",
        "name": "CreateLessonModalRefetch_test",
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
    "text": "query LessonsPageQuery {\n  ...CreateLessonModalRefetch_test\n  lessons {\n    ...LessonPreview_lesson\n  }\n}\n\nfragment CreateLessonModalRefetch_test on Query {\n  lessons {\n    id\n    title\n  }\n}\n\nfragment LessonPreview_lesson on Lesson {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '4aceb23baf7c5b5c96ef70ce63c33388';
export default node;
