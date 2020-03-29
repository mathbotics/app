/* tslint:disable */
/* eslint-disable */
/* @relayHash 40a362618e547693c927f7924cddf648 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonWhereUniqueInput = {
    id?: string | null;
};
export type SlidesPageQueryVariables = {
    where: LessonWhereUniqueInput;
};
export type SlidesPageQueryResponse = {
    readonly lesson: {
        readonly " $fragmentRefs": FragmentRefs<"Slides_lesson">;
    } | null;
};
export type SlidesPageQuery = {
    readonly response: SlidesPageQueryResponse;
    readonly variables: SlidesPageQueryVariables;
};



/*
query SlidesPageQuery(
  $where: LessonWhereUniqueInput!
) {
  lesson(where: $where) {
    ...Slides_lesson
  }
}

fragment Slides_lesson on Lesson {
  title
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
    "name": "SlidesPageQuery",
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
            "name": "Slides_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SlidesPageQuery",
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
    "name": "SlidesPageQuery",
    "id": null,
    "text": "query SlidesPageQuery(\n  $where: LessonWhereUniqueInput!\n) {\n  lesson(where: $where) {\n    ...Slides_lesson\n  }\n}\n\nfragment Slides_lesson on Lesson {\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd582e3aa5e1a1c65cba9a4bc0d1eba53';
export default node;
