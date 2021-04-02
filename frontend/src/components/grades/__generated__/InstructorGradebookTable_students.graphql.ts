/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type InstructorGradebookTable_students = {
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
    readonly " $refType": "InstructorGradebookTable_students";
};
export type InstructorGradebookTable_students$data = InstructorGradebookTable_students;
export type InstructorGradebookTable_students$key = {
    readonly " $data"?: InstructorGradebookTable_students$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_students">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebookTable_students",
  "type": "Course",
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
(node as any).hash = 'b05f87d3a7537382f902a1813b595965';
export default node;
