/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Lessons_lessons = {
    readonly " $fragmentRefs": FragmentRefs<"LessonsTable_lessons">;
    readonly " $refType": "Lessons_lessons";
};
export type Lessons_lessons$data = Lessons_lessons;
export type Lessons_lessons$key = {
    readonly " $data"?: Lessons_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"Lessons_lessons">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Lessons_lessons",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "LessonsTable_lessons",
      "args": null
    }
  ]
};
(node as any).hash = 'fa388bbdc070f4de35fad0f91ac0759a';
export default node;
