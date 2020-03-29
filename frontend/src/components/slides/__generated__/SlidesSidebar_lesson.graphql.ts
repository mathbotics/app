/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SlidesSidebar_lesson = {
    readonly title: string;
    readonly slides: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Slide_slide">;
    }>;
    readonly " $refType": "SlidesSidebar_lesson";
};
export type SlidesSidebar_lesson$data = SlidesSidebar_lesson;
export type SlidesSidebar_lesson$key = {
    readonly " $data"?: SlidesSidebar_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"SlidesSidebar_lesson">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "SlidesSidebar_lesson",
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Slide_slide",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'd36de39fdf2d7805ac6398dc289367a0';
export default node;
