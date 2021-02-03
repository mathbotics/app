/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebook_course = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_course">;
    readonly " $refType": "InstructorGradebook_course";
};
export type InstructorGradebook_course$data = InstructorGradebook_course;
export type InstructorGradebook_course$key = {
    readonly " $data"?: InstructorGradebook_course$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebook_course",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "InstructorGradebookTable_course",
      "args": null
    }
  ]
};
(node as any).hash = '6b190d830a0376cb915d1ddd9eb4cb09';
export default node;
