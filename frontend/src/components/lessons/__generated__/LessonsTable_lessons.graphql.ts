/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonsTable_lessons = {
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly time: string;
        readonly difficultyLevel: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
        }>;
    }>;
    readonly " $refType": "LessonsTable_lessons";
};
export type LessonsTable_lessons$data = LessonsTable_lessons;
export type LessonsTable_lessons$key = {
    readonly " $data"?: LessonsTable_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonsTable_lessons">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "LessonsTable_lessons",
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
            (v0/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '1538944818537848db21de47d90461e4';
export default node;
