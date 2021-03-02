/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGradesTable_lessons = {
    readonly lessons: ReadonlyArray<{
        readonly id: string | null;
        readonly title: string | null;
        readonly slides: ReadonlyArray<{
            readonly id: string | null;
        } | null> | null;
    } | null> | null;
    readonly " $refType": "StudentGradesTable_lessons";
};
export type StudentGradesTable_lessons$data = StudentGradesTable_lessons;
export type StudentGradesTable_lessons$key = {
    readonly " $data"?: StudentGradesTable_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_lessons">;
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
  "name": "StudentGradesTable_lessons",
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
(node as any).hash = 'bca0eec280f52cdcf0a814f60e851a76';
export default node;
