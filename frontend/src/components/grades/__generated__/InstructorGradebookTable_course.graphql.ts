/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type InstructorGradebookTable_course = {
    readonly students: ReadonlyArray<{
        readonly username: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly gradeLevel: GradeLevel;
        readonly id: string;
    }>;
    readonly " $refType": "InstructorGradebookTable_course";
};
export type InstructorGradebookTable_course$data = InstructorGradebookTable_course;
export type InstructorGradebookTable_course$key = {
    readonly " $data"?: InstructorGradebookTable_course$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebookTable_course",
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
        }
      ]
    }
  ]
};
(node as any).hash = '0e4ebc84c79192356f11ee72778fb9f9';
export default node;
