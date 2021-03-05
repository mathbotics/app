/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MultipleChoiceQuestionBlock_block = {
    readonly text: string;
    readonly __typename: "MultipleChoiceQuestionBlock";
    readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceGroup_block">;
    readonly " $refType": "MultipleChoiceQuestionBlock_block";
};
export type MultipleChoiceQuestionBlock_block$data = MultipleChoiceQuestionBlock_block;
export type MultipleChoiceQuestionBlock_block$key = {
    readonly " $data"?: MultipleChoiceQuestionBlock_block$data;
    readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceQuestionBlock_block">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "MultipleChoiceQuestionBlock_block",
  "type": "MultipleChoiceQuestionBlock",
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
      "name": "text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MultipleChoiceGroup_block",
      "args": null
    }
  ]
};
(node as any).hash = '585f6a24df30098797583552e22d0f83';
export default node;
