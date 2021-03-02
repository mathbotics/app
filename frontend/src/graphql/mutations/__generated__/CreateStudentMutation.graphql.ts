/* tslint:disable */
/* eslint-disable */
/* @relayHash 90ac382d9f16f21d12e417c5200a95b7 */

import { ConcreteRequest } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CreateStudentInput = {
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    gradeLevel?: GradeLevel | null;
    email?: string | null;
    courseId?: string | null;
};
export type CreateStudentMutationVariables = {
    input: CreateStudentInput;
};
export type CreateStudentMutationResponse = {
    readonly createStudent: {
        readonly student: {
            readonly username: string | null;
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly gradeLevel: GradeLevel | null;
        };
    } | null;
};
export type CreateStudentMutation = {
    readonly response: CreateStudentMutationResponse;
    readonly variables: CreateStudentMutationVariables;
};



/*
mutation CreateStudentMutation(
  $input: CreateStudentInput!
) {
  createStudent(input: $input) {
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
    "type": "CreateStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createStudent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateStudentPayload",
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
    "name": "CreateStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateStudentMutation",
    "id": null,
    "text": "mutation CreateStudentMutation(\n  $input: CreateStudentInput!\n) {\n  createStudent(input: $input) {\n    student {\n      username\n      firstName\n      lastName\n      gradeLevel\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0aa4bad92e9da4c9d14274e2c8021194';
export default node;
