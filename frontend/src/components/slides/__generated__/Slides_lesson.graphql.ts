/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slides_lesson = {
    readonly id: string;
    readonly title: string;
    readonly " $fragmentRefs": FragmentRefs<"SlidesSidebar_lesson">;
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
    },
    {
      "kind": "FragmentSpread",
      "name": "SlidesSidebar_lesson",
      "args": null
    }
  ]
};
(node as any).hash = '5ca702db6b76ef4893d47a47e0c29642';
export default node;
