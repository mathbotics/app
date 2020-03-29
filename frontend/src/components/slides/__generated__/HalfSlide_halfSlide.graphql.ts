/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HalfSlide_halfSlide = {
    readonly id: string;
    readonly " $refType": "HalfSlide_halfSlide";
};
export type HalfSlide_halfSlide$data = HalfSlide_halfSlide;
export type HalfSlide_halfSlide$key = {
    readonly " $data"?: HalfSlide_halfSlide$data;
    readonly " $fragmentRefs": FragmentRefs<"HalfSlide_halfSlide">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HalfSlide_halfSlide",
  "type": "HalfSlide",
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
(node as any).hash = '695b47b85a2905c25e07088ab012d852';
export default node;
