/* tslint:disable */
/* eslint-disable */
/* @relayHash 8e555dbeefcdb5b098a51777b2a54a7d */

import { ConcreteRequest } from "relay-runtime";
export type GradeLevel = "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type EditStudentInput = {
    firstName: string;
    gradeLevel: GradeLevel;
    lastName: string;
    studentId: string;
    username: string;
};
export type EditStudentMutationVariables = {
    input: EditStudentInput;
};
export type EditStudentMutationResponse = {
    readonly editStudent: {
        readonly username: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly gradeLevel: GradeLevel;
    };
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
    "text": "mutation EditStudentMutation(\n  $input: EditStudentInput!\n) {\n  editStudent(input: $input) {\n    username\n    firstName\n    lastName\n    gradeLevel\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8fe84524a3fa77622c6ff35acf1c4ee4';
export default node;
