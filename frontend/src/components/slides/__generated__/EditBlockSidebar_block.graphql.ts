/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditBlockSidebar_block = {
    readonly __typename: "MultipleChoiceQuestionBlock";
    readonly id: string | null;
    readonly " $fragmentRefs": FragmentRefs<"EditMultipleChoiceQuestionBlockForm_block">;
    readonly " $refType": "EditBlockSidebar_block";
} | {
    readonly __typename: "TextBlock";
    readonly id: string | null;
    readonly " $fragmentRefs": FragmentRefs<"EditTextBlockForm_block">;
    readonly " $refType": "EditBlockSidebar_block";
} | {
    readonly __typename: "EmptyBlock";
    readonly id: string | null;
    readonly " $refType": "EditBlockSidebar_block";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "EditBlockSidebar_block";
};
export type EditBlockSidebar_block$data = EditBlockSidebar_block;
export type EditBlockSidebar_block$key = {
    readonly " $data"?: EditBlockSidebar_block$data;
    readonly " $fragmentRefs": FragmentRefs<"EditBlockSidebar_block">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EditBlockSidebar_block",
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
          "name": "EditMultipleChoiceQuestionBlockForm_block",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "TextBlock",
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "EditTextBlockForm_block",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "EmptyBlock",
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
(node as any).hash = 'c239dcf20b3b73cad07ea1f90124ac35';
export default node;
