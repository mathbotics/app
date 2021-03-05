/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditTextBlockForm_block = {
    readonly title: string;
    readonly body: string;
    readonly " $refType": "EditTextBlockForm_block";
};
export type EditTextBlockForm_block$data = EditTextBlockForm_block;
export type EditTextBlockForm_block$key = {
    readonly " $data"?: EditTextBlockForm_block$data;
    readonly " $fragmentRefs": FragmentRefs<"EditTextBlockForm_block">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditTextBlockForm_block",
  "type": "TextBlock",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node as any).hash = '20a97671cf556ea2260d3fb1d8431925';
export default node;
