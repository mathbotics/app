/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type EditCourse_student = {
    readonly id: string;
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gradeLevel: GradeLevel;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_student">;
    readonly " $refType": "EditCourse_student";
};
export type EditCourse_student$data = EditCourse_student;
export type EditCourse_student$key = {
    readonly " $data"?: EditCourse_student$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_student">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourse_student",
  "type": "Student",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "kind": "FragmentSpread",
      "name": "EditCourseStudents_student",
      "args": null
    }
  ]
};
(node as any).hash = '96dfbdbc9925c482f3be949c073fb056';
export default node;
