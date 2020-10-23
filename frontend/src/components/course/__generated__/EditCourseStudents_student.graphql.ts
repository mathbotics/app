/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseStudents_student = {
    readonly id: string;
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
    }
  ]
};
(node as any).hash = 'bffd3a171e942cfa4eba2656e0d12773';
export default node;
