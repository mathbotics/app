/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditStudentForm_course = {
    readonly " $fragmentRefs": FragmentRefs<"StudentsTable_course">;
    readonly " $refType": "EditStudentForm_course";
};
export type EditStudentForm_course$data = EditStudentForm_course;
export type EditStudentForm_course$key = {
    readonly " $data"?: EditStudentForm_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditStudentForm_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditStudentForm_course",
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
(node as any).hash = 'a2d6f3f96095cedf9c64bf2161653d3b';
export default node;
