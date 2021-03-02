/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TextBlock_block = {
    readonly id: string | null;
    readonly title: string | null;
    readonly body: string | null;
    readonly " $refType": "TextBlock_block";
};
export type TextBlock_block$data = TextBlock_block;
export type TextBlock_block$key = {
    readonly " $data"?: TextBlock_block$data;
    readonly " $fragmentRefs": FragmentRefs<"TextBlock_block">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TextBlock_block",
  "type": "TextBlock",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ce16c37c603e22624a76e99ec49015c7';
export default node;
