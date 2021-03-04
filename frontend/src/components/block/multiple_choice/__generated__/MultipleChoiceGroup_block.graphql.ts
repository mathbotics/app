/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MultipleChoiceGroup_block = {
    readonly choices: ReadonlyArray<{
        readonly id: string | null;
        readonly text: string | null;
        readonly correct: boolean | null;
    } | null> | null;
    readonly " $refType": "MultipleChoiceGroup_block";
};
export type MultipleChoiceGroup_block$data = MultipleChoiceGroup_block;
export type MultipleChoiceGroup_block$key = {
    readonly " $data"?: MultipleChoiceGroup_block$data;
    readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceGroup_block">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "MultipleChoiceGroup_block",
  "type": "MultipleChoiceQuestionBlock",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "choices",
      "storageKey": null,
      "args": null,
      "concreteType": "MultipleChoiceQuestionChoice",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
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
(node as any).hash = '8b0785b225333ea719ba7991fad2c8a9';
export default node;
