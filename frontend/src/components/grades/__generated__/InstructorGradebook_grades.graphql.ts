/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebook_grades = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_grades">;
    readonly " $refType": "InstructorGradebook_grades";
};
export type InstructorGradebook_grades$data = InstructorGradebook_grades;
export type InstructorGradebook_grades$key = {
    readonly " $data"?: InstructorGradebook_grades$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_grades">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebook_grades",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "InstructorGradebookTable_grades",
      "args": null
    }
  ]
};
(node as any).hash = 'ef22ff5cefff5e79df02539ff965ada9';
export default node;
