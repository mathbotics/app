/* tslint:disable */
/* eslint-disable */
/* @relayHash a4ac460470dc3f07d745ea2e737b88b4 */

import { ConcreteRequest } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CreateStudentInput = {
    courseId: string;
    firstName: string;
    gradeLevel: GradeLevel;
    lastName: string;
    password: string;
    username: string;
};
export type CreateStudentMutationVariables = {
    input: CreateStudentInput;
};
export type CreateStudentMutationResponse = {
    readonly createStudent: {
        readonly username: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly gradeLevel: GradeLevel;
    };
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
    username
    firstName
    lastName
    gradeLevel
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
    "text": "mutation CreateStudentMutation(\n  $input: CreateStudentInput!\n) {\n  createStudent(input: $input) {\n    username\n    firstName\n    lastName\n    gradeLevel\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9ff5679735594f3f3c1e41f406a341af';
export default node;
