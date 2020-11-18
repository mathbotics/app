/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebook_lessons = {
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_lessons">;
    readonly " $refType": "InstructorGradebook_lessons";
};
export type InstructorGradebook_lessons$data = InstructorGradebook_lessons;
export type InstructorGradebook_lessons$key = {
    readonly " $data"?: InstructorGradebook_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_lessons">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebook_lessons",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "InstructorGradebookTable_lessons",
      "args": null
    }
  ]
};
(node as any).hash = '2c8b908509056638991841a4b434b795';
export default node;
