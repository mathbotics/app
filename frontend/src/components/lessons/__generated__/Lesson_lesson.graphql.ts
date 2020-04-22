/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Lesson_lesson = {
    readonly id: string;
    readonly " $refType": "Lesson_lesson";
};
export type Lesson_lesson$data = Lesson_lesson;
export type Lesson_lesson$key = {
    readonly " $data"?: Lesson_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"Lesson_lesson">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Lesson_lesson",
  "type": "Lesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4ef4feee85ab20c8cba940755648b554';
export default node;
