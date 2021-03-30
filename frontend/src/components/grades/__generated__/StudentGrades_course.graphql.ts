/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGrades_course = {
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_course">;
    readonly " $refType": "StudentGrades_course";
};
export type StudentGrades_course$data = StudentGrades_course;
export type StudentGrades_course$key = {
    readonly " $data"?: StudentGrades_course$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentGrades_course",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StudentGradesTable_course",
      "args": null
    }
  ]
};
(node as any).hash = '1f5f9cb6d99b25ac48a4e048705b5535';
export default node;
