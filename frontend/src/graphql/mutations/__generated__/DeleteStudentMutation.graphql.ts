/* tslint:disable */
/* eslint-disable */
/* @relayHash 40f5079b62bb37b720c1a1c6e55ecf1e */

import { ConcreteRequest } from "relay-runtime";
export type DeleteStudentInput = {
    courseId: string;
};
export type DeleteStudentMutationVariables = {
    input: DeleteStudentInput;
};
export type DeleteStudentMutationResponse = {
    readonly deleteStudents: {
        readonly courses: ReadonlyArray<{
            readonly id: string;
        }>;
    };
};
export type DeleteStudentMutation = {
    readonly response: DeleteStudentMutationResponse;
    readonly variables: DeleteStudentMutationVariables;
};



/*
mutation DeleteStudentMutation(
  $input: DeleteStudentInput!
) {
  deleteStudents(input: $input) {
    courses {
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
    "name": "deleteStudents",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": null,
        "concreteType": "Course",
        "plural": true,
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
    "text": "mutation DeleteStudentMutation(\n  $input: DeleteStudentInput!\n) {\n  deleteStudents(input: $input) {\n    courses {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b2bb2d990c11a3d68d591ae8c805da4d';
export default node;
