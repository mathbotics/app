/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditMultipleChoiceQuestionBlockForm_block = {
    readonly text: string | null;
    readonly choices: ReadonlyArray<{
        readonly id: string | null;
        readonly text: string | null;
        readonly correct: boolean | null;
    } | null> | null;
    readonly " $refType": "EditMultipleChoiceQuestionBlockForm_block";
};
export type EditMultipleChoiceQuestionBlockForm_block$data = EditMultipleChoiceQuestionBlockForm_block;
export type EditMultipleChoiceQuestionBlockForm_block$key = {
    readonly " $data"?: EditMultipleChoiceQuestionBlockForm_block$data;
    readonly " $fragmentRefs": FragmentRefs<"EditMultipleChoiceQuestionBlockForm_block">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EditMultipleChoiceQuestionBlockForm_block",
  "type": "MultipleChoiceQuestionBlock",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
(node as any).hash = '571c2c1dbfc7f5c793ded56942979635';
export default node;
