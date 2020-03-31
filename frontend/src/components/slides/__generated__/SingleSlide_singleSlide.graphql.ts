/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SingleSlide_singleSlide = {
    readonly id: string;
    readonly block: {
        readonly " $fragmentRefs": FragmentRefs<"EditBlockSidebar_block">;
    };
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "block",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "EditBlockSidebar_block",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'c2ee427223cbd6f339b356a5e6140932';
export default node;
