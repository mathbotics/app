/* tslint:disable */
/* eslint-disable */
/* @relayHash 3e3bf5c33a4c1aa77196f42d8d262911 */

import { ConcreteRequest } from "relay-runtime";
export type createMultipleChoiceQuestionResponseInput = {
    blockId?: string | null;
    studentId?: string | null;
    multipleChoiceQuestionChoiceId?: string | null;
};
export type CreateMultipleChoiceQuestionResponseMutationVariables = {
    input: createMultipleChoiceQuestionResponseInput;
};
export type CreateMultipleChoiceQuestionResponseMutationResponse = {
    readonly createResponse: {
        readonly multipleChoiceQuestionBlockId: string;
        readonly multipleChoiceQuestionChoiceId: string;
        readonly studentId: string;
    } | null;
};
export type CreateMultipleChoiceQuestionResponseMutation = {
    readonly response: CreateMultipleChoiceQuestionResponseMutationResponse;
    readonly variables: CreateMultipleChoiceQuestionResponseMutationVariables;
};



/*
mutation CreateMultipleChoiceQuestionResponseMutation(
  $input: createMultipleChoiceQuestionResponseInput!
) {
  createResponse(input: $input) {
    multipleChoiceQuestionBlockId
    multipleChoiceQuestionChoiceId
    studentId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createMultipleChoiceQuestionResponseInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createResponse",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MultipleChoiceQuestionResponse",
    "plural": false,
    "selections": [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMultipleChoiceQuestionResponseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMultipleChoiceQuestionResponseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateMultipleChoiceQuestionResponseMutation",
    "id": null,
    "text": "mutation CreateMultipleChoiceQuestionResponseMutation(\n  $input: createMultipleChoiceQuestionResponseInput!\n) {\n  createResponse(input: $input) {\n    multipleChoiceQuestionBlockId\n    multipleChoiceQuestionChoiceId\n    studentId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'edb430eee0fc9c6ac3b221e17d9d08aa';
export default node;
