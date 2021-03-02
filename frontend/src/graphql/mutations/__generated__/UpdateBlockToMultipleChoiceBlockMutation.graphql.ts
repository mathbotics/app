/* tslint:disable */
/* eslint-disable */
/* @relayHash 1aabc49275c7478d3348104c076ac861 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpdateBlockToMultipleChoiceBlockInput = {
    blockId?: string | null;
    questionText?: string | null;
    choices?: Array<ChoiceInput | null> | null;
};
export type ChoiceInput = {
    text?: string | null;
    correct?: boolean | null;
};
export type UpdateBlockToMultipleChoiceBlockMutationVariables = {
    input: UpdateBlockToMultipleChoiceBlockInput;
};
export type UpdateBlockToMultipleChoiceBlockMutationResponse = {
    readonly updateBlockToMultipleChoiceBlock: {
        readonly multipleChoiceQuestionBlock: {
            readonly id: string | null;
            readonly " $fragmentRefs": FragmentRefs<"MultipleChoiceQuestionBlock_block">;
        };
    } | null;
};
export type UpdateBlockToMultipleChoiceBlockMutation = {
    readonly response: UpdateBlockToMultipleChoiceBlockMutationResponse;
    readonly variables: UpdateBlockToMultipleChoiceBlockMutationVariables;
};



/*
mutation UpdateBlockToMultipleChoiceBlockMutation(
  $input: UpdateBlockToMultipleChoiceBlockInput!
) {
  updateBlockToMultipleChoiceBlock(input: $input) {
    multipleChoiceQuestionBlock {
      id
      ...MultipleChoiceQuestionBlock_block
    }
  }
}

fragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {
  choices {
    id
    text
    correct
  }
}

fragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {
  __typename
  text
  ...MultipleChoiceGroup_block
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateBlockToMultipleChoiceBlockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateBlockToMultipleChoiceBlockMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockToMultipleChoiceBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateBlockToMultipleChoiceBlockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multipleChoiceQuestionBlock",
            "storageKey": null,
            "args": null,
            "concreteType": "MultipleChoiceQuestionBlock",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "MultipleChoiceQuestionBlock_block",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateBlockToMultipleChoiceBlockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockToMultipleChoiceBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateBlockToMultipleChoiceBlockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multipleChoiceQuestionBlock",
            "storageKey": null,
            "args": null,
            "concreteType": "MultipleChoiceQuestionBlock",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "choices",
                "storageKey": null,
                "args": null,
                "concreteType": "MultipleChoiceQuestionChoice",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateBlockToMultipleChoiceBlockMutation",
    "id": null,
    "text": "mutation UpdateBlockToMultipleChoiceBlockMutation(\n  $input: UpdateBlockToMultipleChoiceBlockInput!\n) {\n  updateBlockToMultipleChoiceBlock(input: $input) {\n    multipleChoiceQuestionBlock {\n      id\n      ...MultipleChoiceQuestionBlock_block\n    }\n  }\n}\n\nfragment MultipleChoiceGroup_block on MultipleChoiceQuestionBlock {\n  choices {\n    id\n    text\n    correct\n  }\n}\n\nfragment MultipleChoiceQuestionBlock_block on MultipleChoiceQuestionBlock {\n  __typename\n  text\n  ...MultipleChoiceGroup_block\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bb0ddf6499cfda96715912b00e885225';
export default node;
