/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseStudents_course = {
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
      "kind": "FragmentSpread",
      "name": "StudentsTable_course",
      "args": null
    }
  ]
};
(node as any).hash = 'bdfcf0b5d72b21053aca34bcf0a283c2';
export default node;
