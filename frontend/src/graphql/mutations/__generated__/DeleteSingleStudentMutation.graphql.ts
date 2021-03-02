/* tslint:disable */
/* eslint-disable */
/* @relayHash 62a60a93d2529e8d47443cafc8fcd7f0 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteStudentInput = {
    studentId?: string | null;
    courseId?: string | null;
};
export type DeleteSingleStudentMutationVariables = {
    input: DeleteStudentInput;
};
export type DeleteSingleStudentMutationResponse = {
    readonly deleteSingleStudent: {
        readonly student: {
            readonly id: string | null;
        };
    } | null;
};
export type DeleteSingleStudentMutation = {
    readonly response: DeleteSingleStudentMutationResponse;
    readonly variables: DeleteSingleStudentMutationVariables;
};



/*
mutation DeleteSingleStudentMutation(
  $input: DeleteStudentInput!
) {
  deleteSingleStudent(input: $input) {
    student {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteStudentInput!",
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
    "concreteType": "DeleteStudentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "student",
        "storageKey": null,
        "args": null,
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
    "text": "mutation DeleteSingleStudentMutation(\n  $input: DeleteStudentInput!\n) {\n  deleteSingleStudent(input: $input) {\n    student {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '65b4d79029838e4ee14ca9c31f545b49';
export default node;
