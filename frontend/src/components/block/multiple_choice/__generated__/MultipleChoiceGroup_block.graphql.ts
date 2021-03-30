/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MultipleChoiceGroup_block = {
    readonly id: string;
    readonly choices: ReadonlyArray<{
        readonly id: string;
        readonly text: string;
        readonly correct: boolean;
    }>;
    readonly __typename: "MultipleChoiceQuestionBlock";
    readonly " $refType": "MultipleChoiceGroup_block";
};
export type MultipleChoiceGroup_block$data = MultipleChoiceGroup_block;
export type MultipleChoiceGroup_block$key = {
    readonly " $data"?: MultipleChoiceGroup_block$data;
    readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceGroup_block">;
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
  "name": "MultipleChoiceGroup_block",
  "type": "MultipleChoiceQuestionBlock",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "choices",
      "storageKey": null,
      "args": null,
      "concreteType": "MultipleChoiceQuestionChoice",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "text",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "correct",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '7cf0fd6482e5f5742fc66fecff54b835';
export default node;
