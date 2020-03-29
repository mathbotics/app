/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slides_lesson = {
    readonly title: string;
    readonly " $refType": "Slides_lesson";
};
export type Slides_lesson$data = Slides_lesson;
export type Slides_lesson$key = {
    readonly " $data"?: Slides_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"Slides_lesson">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Slides_lesson",
  "type": "Lesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'c98414c933b29dfdbe92f1fe0d7acec9';
export default node;
