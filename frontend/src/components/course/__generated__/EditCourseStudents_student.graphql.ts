/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseStudents_student = {
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"StudentsTable_student">;
    readonly " $refType": "EditCourseStudents_student";
};
export type EditCourseStudents_student$data = EditCourseStudents_student;
export type EditCourseStudents_student$key = {
    readonly " $data"?: EditCourseStudents_student$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_student">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourseStudents_student",
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
      "kind": "FragmentSpread",
      "name": "StudentsTable_student",
      "args": null
    }
  ]
};
(node as any).hash = 'f2f359216899388e48f7111ddd89a5c4';
export default node;
