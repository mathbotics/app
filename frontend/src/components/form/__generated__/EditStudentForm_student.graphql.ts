/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type EditStudentForm_student = {
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gradeLevel: GradeLevel;
    readonly id: string;
    readonly " $refType": "EditStudentForm_student";
};
export type EditStudentForm_student$data = EditStudentForm_student;
export type EditStudentForm_student$key = {
    readonly " $data"?: EditStudentForm_student$data;
    readonly " $fragmentRefs": FragmentRefs<"EditStudentForm_student">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditStudentForm_student",
  "type": "Student",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '60c117a4ab8a19f650e3f8f1c154d586';
export default node;
