/* tslint:disable */
/* eslint-disable */
/* @relayHash 66e6b3b8c591bbc236e5fcec4cb13d5d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpdateBlockToTextBlockInput = {
    blockId?: string | null;
    title?: string | null;
    body?: string | null;
};
export type UpdateBlockToTextBlockMutationVariables = {
    input: UpdateBlockToTextBlockInput;
};
export type UpdateBlockToTextBlockMutationResponse = {
    readonly updateBlockToTextBlock: {
        readonly textBlock: {
            readonly id: string | null;
            readonly " $fragmentRefs": FragmentRefs<"TextBlock_block">;
        };
    } | null;
};
export type UpdateBlockToTextBlockMutation = {
    readonly response: UpdateBlockToTextBlockMutationResponse;
    readonly variables: UpdateBlockToTextBlockMutationVariables;
};



/*
mutation UpdateBlockToTextBlockMutation(
  $input: UpdateBlockToTextBlockInput!
) {
  updateBlockToTextBlock(input: $input) {
    textBlock {
      id
      ...TextBlock_block
    }
  }
}

fragment TextBlock_block on TextBlock {
  id
  title
  body
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateBlockToTextBlockInput!",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateBlockToTextBlockMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockToTextBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateBlockToTBPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "textBlock",
            "storageKey": null,
            "args": null,
            "concreteType": "TextBlock",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "TextBlock_block",
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
    "name": "UpdateBlockToTextBlockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockToTextBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateBlockToTBPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "textBlock",
            "storageKey": null,
            "args": null,
            "concreteType": "TextBlock",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateBlockToTextBlockMutation",
    "id": null,
    "text": "mutation UpdateBlockToTextBlockMutation(\n  $input: UpdateBlockToTextBlockInput!\n) {\n  updateBlockToTextBlock(input: $input) {\n    textBlock {\n      id\n      ...TextBlock_block\n    }\n  }\n}\n\nfragment TextBlock_block on TextBlock {\n  id\n  title\n  body\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '400865c2d8fa224876bcd9e505a94467';
export default node;
