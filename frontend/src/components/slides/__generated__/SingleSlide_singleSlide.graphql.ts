/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SingleSlide_singleSlide = {
    readonly id: string;
    readonly " $refType": "SingleSlide_singleSlide";
};
export type SingleSlide_singleSlide$data = SingleSlide_singleSlide;
export type SingleSlide_singleSlide$key = {
    readonly " $data"?: SingleSlide_singleSlide$data;
    readonly " $fragmentRefs": FragmentRefs<"SingleSlide_singleSlide">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "SingleSlide_singleSlide",
  "type": "SingleSlide",
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
(node as any).hash = '7166a5b4fe0c1500c938e2fa695d7c3c';
export default node;
