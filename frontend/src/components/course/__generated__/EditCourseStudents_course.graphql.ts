/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseStudents_course = {
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"StudentsTable_course">;
    readonly " $refType": "EditCourseStudents_course";
};
export type EditCourseStudents_course$data = EditCourseStudents_course;
export type EditCourseStudents_course$key = {
    readonly " $data"?: EditCourseStudents_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourseStudents_course",
  "type": "Course",
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
      "name": "StudentsTable_course",
      "args": null
    }
  ]
};
(node as any).hash = 'b6f57ff46a4af64bad5ea189dbc6f9bc';
export default node;
