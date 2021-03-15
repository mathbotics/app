/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type StudentsTable_course = {
    readonly courseTo: ReadonlyArray<{
        readonly student: {
            readonly username: string;
            readonly firstName: string;
            readonly lastName: string;
            readonly gradeLevel: GradeLevel;
            readonly id: string;
        } | null;
    } | null> | null;
    readonly " $refType": "StudentsTable_course";
};
export type StudentsTable_course$data = StudentsTable_course;
export type StudentsTable_course$key = {
    readonly " $data"?: StudentsTable_course$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentsTable_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentsTable_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "courseTo",
      "storageKey": null,
      "args": null,
      "concreteType": "CourseToStudent",
      "plural": true,
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
            },
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
  ]
};
(node as any).hash = '6f6a4f25651f1e43efa2193e2d18dbce';
export default node;
