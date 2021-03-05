/* tslint:disable */
/* eslint-disable */
/* @relayHash 7aea267e999f893b29432e6d26231c9e */

import { ConcreteRequest } from "relay-runtime";
export type DeleteStudentsInput = {
    courseId?: string | null;
};
export type DeleteStudentMutationVariables = {
    input: DeleteStudentsInput;
};
export type DeleteStudentMutationResponse = {
    readonly deleteStudents: {
        readonly course: {
            readonly id: string;
        };
    } | null;
};
export type DeleteStudentMutation = {
    readonly response: DeleteStudentMutationResponse;
    readonly variables: DeleteStudentMutationVariables;
};



/*
mutation DeleteStudentMutation(
  $input: DeleteStudentsInput!
) {
  deleteStudents(input: $input) {
    course {
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
    "type": "DeleteStudentsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteStudents",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteStudentsPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
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
    "name": "DeleteStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteStudentMutation",
    "id": null,
    "text": "mutation DeleteStudentMutation(\n  $input: DeleteStudentsInput!\n) {\n  deleteStudents(input: $input) {\n    course {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '634cf2f55ba3fd93a7c8eaa8dea40e8c';
export default node;
