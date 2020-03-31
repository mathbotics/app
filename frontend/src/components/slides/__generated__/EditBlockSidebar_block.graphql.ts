/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditBlockSidebar_block = {
    readonly id?: string;
    readonly " $refType": "EditBlockSidebar_block";
};
export type EditBlockSidebar_block$data = EditBlockSidebar_block;
export type EditBlockSidebar_block$key = {
    readonly " $data"?: EditBlockSidebar_block$data;
    readonly " $fragmentRefs": FragmentRefs<"EditBlockSidebar_block">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "EditBlockSidebar_block",
  "type": "Block",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "MultipleChoiceQuestionBlock",
      "selections": (v0/*: any*/)
    },
    {
      "kind": "InlineFragment",
      "type": "TextBlock",
      "selections": (v0/*: any*/)
    }
  ]
};
})();
(node as any).hash = 'eb618c3aefb2f496bc134ac460f87f25';
export default node;
