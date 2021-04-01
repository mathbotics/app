/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type StudentGradesTable_students = {
    readonly students: ReadonlyArray<{
        readonly username: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly gradeLevel: GradeLevel;
        readonly id: string;
        readonly grades: ReadonlyArray<{
            readonly lessonId: string;
            readonly grade: number;
        }>;
    }>;
    readonly " $refType": "StudentGradesTable_students";
};
export type StudentGradesTable_students$data = StudentGradesTable_students;
export type StudentGradesTable_students$key = {
    readonly " $data"?: StudentGradesTable_students$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_students">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentGradesTable_students",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "Student",
      "plural": true,
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "grades",
          "storageKey": null,
          "args": null,
          "concreteType": "Grade",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lessonId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "grade",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '90887dca3799406f5f58dd5986fbcb14';
export default node;
