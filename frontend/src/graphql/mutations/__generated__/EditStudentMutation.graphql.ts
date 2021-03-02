/* tslint:disable */
/* eslint-disable */
/* @relayHash 0c51b2dfce2e33504d88e1b547737f03 */

import { ConcreteRequest } from "relay-runtime";
export type GradeLevel = "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type EditStudentInput = {
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    studentId?: string | null;
    gradeLevel?: GradeLevel | null;
};
export type EditStudentMutationVariables = {
    input: EditStudentInput;
};
export type EditStudentMutationResponse = {
    readonly editStudent: {
        readonly student: {
            readonly username: string | null;
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly gradeLevel: GradeLevel | null;
        };
    } | null;
};
export type EditStudentMutation = {
    readonly response: EditStudentMutationResponse;
    readonly variables: EditStudentMutationVariables;
};



/*
mutation EditStudentMutation(
  $input: EditStudentInput!
) {
  editStudent(input: $input) {
    student {
      username
      firstName
      lastName
      gradeLevel
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editStudent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "EditStudentPayload",
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
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "gradeLevel",
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
    "name": "EditStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditStudentMutation",
    "id": null,
    "text": "mutation EditStudentMutation(\n  $input: EditStudentInput!\n) {\n  editStudent(input: $input) {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3aec530eb0c884102e15e1413710d8ec';
export default node;
