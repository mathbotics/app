/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slide_slide = {
    readonly __typename: string;
    readonly title: string;
    readonly " $fragmentRefs": FragmentRefs<"SingleSlide_singleSlide" | "HalfSlide_halfSlide">;
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
    },
    {
      "kind": "InlineFragment",
      "type": "HalfSlide",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "HalfSlide_halfSlide",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'ba227f89a122facb48062c032786f35c';
export default node;
