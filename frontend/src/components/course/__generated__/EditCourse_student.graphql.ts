/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_student = {
    readonly id: string;
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
      "kind": "FragmentSpread",
      "name": "EditCourseStudents_student",
      "args": null
    }
  ]
};
(node as any).hash = '0c457408355e042227787bd665876c6b';
export default node;
