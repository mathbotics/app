/* tslint:disable */
/* eslint-disable */
/* @relayHash ec6dc54919d1d0f1461b1991dd2681cc */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonWhereUniqueInput = {
    id?: string | null;
};
export type LessonPageQueryVariables = {
    where: LessonWhereUniqueInput;
};
export type LessonPageQueryResponse = {
    readonly lesson: {
        readonly " $fragmentRefs": FragmentRefs<"Lesson_lesson">;
    } | null;
};
export type LessonPageQuery = {
    readonly response: LessonPageQueryResponse;
    readonly variables: LessonPageQueryVariables;
};



/*
query LessonPageQuery(
  $where: LessonWhereUniqueInput!
) {
  lesson(where: $where) {
    ...Lesson_lesson
  }
}

fragment Lesson_lesson on Lesson {
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "LessonWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LessonPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Lesson_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LessonPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LessonPageQuery",
    "id": null,
    "text": "query LessonPageQuery(\n  $where: LessonWhereUniqueInput!\n) {\n  lesson(where: $where) {\n    ...Lesson_lesson\n  }\n}\n\nfragment Lesson_lesson on Lesson {\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'eea2b9e79ebd6252379b1e968db931c8';
export default node;
