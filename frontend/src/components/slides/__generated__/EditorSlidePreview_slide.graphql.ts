/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditorSlidePreview_slide = {
    readonly " $fragmentRefs": FragmentRefs<"Slide_slide">;
    readonly " $refType": "EditorSlidePreview_slide";
};
export type EditorSlidePreview_slide$data = EditorSlidePreview_slide;
export type EditorSlidePreview_slide$key = {
    readonly " $data"?: EditorSlidePreview_slide$data;
    readonly " $fragmentRefs": FragmentRefs<"EditorSlidePreview_slide">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditorSlidePreview_slide",
  "type": "Slide",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Slide_slide",
      "args": null
    }
  ]
};
(node as any).hash = '221ee86618fa10e9aef58b40dadbb864';
export default node;
