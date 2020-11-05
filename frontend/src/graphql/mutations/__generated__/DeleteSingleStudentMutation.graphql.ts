/* tslint:disable */
/* eslint-disable */
/* @relayHash 91397b7609a3af7c037c96f4ca665748 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteSingleStudentInput = {
    studentId: string;
};
export type DeleteSingleStudentMutationVariables = {
    input: DeleteSingleStudentInput;
};
export type DeleteSingleStudentMutationResponse = {
    readonly deleteSingleStudent: {
        readonly id: string;
    };
};
export type DeleteSingleStudentMutation = {
    readonly response: DeleteSingleStudentMutationResponse;
    readonly variables: DeleteSingleStudentMutationVariables;
};



/*
mutation DeleteSingleStudentMutation(
  $input: DeleteSingleStudentInput!
) {
  deleteSingleStudent(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteSingleStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteSingleStudent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Student",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "DeleteSingleStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteSingleStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteSingleStudentMutation",
    "id": null,
    "text": "mutation DeleteSingleStudentMutation(\n  $input: DeleteSingleStudentInput!\n) {\n  deleteSingleStudent(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '276216d3aa306c4a33f8d0c51ffdd614';
export default node;
