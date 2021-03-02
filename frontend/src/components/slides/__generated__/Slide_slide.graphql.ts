/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slide_slide = {
    readonly __typename: string;
    readonly title: string | null;
    readonly " $fragmentRefs": FragmentRefs<"SingleSlide_singleSlide">;
    readonly " $refType": "Slide_slide";
};
export type Slide_slide$data = Slide_slide;
export type Slide_slide$key = {
    readonly " $data"?: Slide_slide$data;
    readonly " $fragmentRefs": FragmentRefs<"Slide_slide">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Slide_slide",
  "type": "Slide",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
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
      "kind": "InlineFragment",
      "type": "SingleSlide",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "SingleSlide_singleSlide",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '79da4702b9af89fbd55ad64cc6bfaaab';
export default node;
