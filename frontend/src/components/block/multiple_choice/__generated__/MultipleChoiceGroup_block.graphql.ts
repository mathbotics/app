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
    readonly responses: ReadonlyArray<{
        readonly id: string | null;
        readonly multipleChoiceQuestionBlockId: string;
        readonly multipleChoiceQuestionChoiceId: string;
        readonly studentId: string;
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "responses",
      "storageKey": null,
      "args": null,
      "concreteType": "MultipleChoiceQuestionResponse",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "multipleChoiceQuestionBlockId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "multipleChoiceQuestionChoiceId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "studentId",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '4857163406aa4d78ed19adbd5c002558';
export default node;
