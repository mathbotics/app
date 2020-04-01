/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Block_block = {
    readonly __typename: "MultipleChoiceQuestionBlock";
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceQuestionBlock_block">;
    readonly " $refType": "Block_block";
} | {
    readonly __typename: "TextBlock";
    readonly id: string;
    readonly " $refType": "Block_block";
} | {
    readonly __typename: "EmptyBlock";
    readonly id: string;
    readonly " $refType": "Block_block";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "Block_block";
};
export type Block_block$data = Block_block;
export type Block_block$key = {
    readonly " $data"?: Block_block$data;
    readonly " $fragmentRefs": FragmentRefs<"Block_block">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "kind": "Fragment",
  "name": "Block_block",
  "type": "Block",
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
      "kind": "InlineFragment",
      "type": "MultipleChoiceQuestionBlock",
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "MultipleChoiceQuestionBlock_block",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "TextBlock",
      "selections": (v1/*: any*/)
    },
    {
      "kind": "InlineFragment",
      "type": "EmptyBlock",
      "selections": (v1/*: any*/)
    }
  ]
};
})();
(node as any).hash = 'b2cd4d58f7b610828fdbccd27bde0c04';
export default node;
