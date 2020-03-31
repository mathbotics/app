/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HalfSlide_halfSlide = {
    readonly id: string;
    readonly firstHalfBlock: {
        readonly " $fragmentRefs": FragmentRefs<"EditBlockSidebar_block">;
    };
    readonly secondHalfBlock: {
        readonly " $fragmentRefs": FragmentRefs<"EditBlockSidebar_block">;
    };
    readonly " $refType": "HalfSlide_halfSlide";
};
export type HalfSlide_halfSlide$data = HalfSlide_halfSlide;
export type HalfSlide_halfSlide$key = {
    readonly " $data"?: HalfSlide_halfSlide$data;
    readonly " $fragmentRefs": FragmentRefs<"HalfSlide_halfSlide">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "EditBlockSidebar_block",
    "args": null
  }
];
return {
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "firstHalfBlock",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "secondHalfBlock",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
(node as any).hash = '1e6e54199dcf5f9dc572171e4d21fbf0';
export default node;
