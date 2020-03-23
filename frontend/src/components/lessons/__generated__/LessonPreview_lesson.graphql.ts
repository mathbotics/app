/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPreview_lesson = {
    readonly id: string;
    readonly title: string;
    readonly " $refType": "LessonPreview_lesson";
};
export type LessonPreview_lesson$data = LessonPreview_lesson;
export type LessonPreview_lesson$key = {
    readonly " $data"?: LessonPreview_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPreview_lesson">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "LessonPreview_lesson",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '791d7c90ae0ba2f0a5857f0568a64a32';
export default node;
