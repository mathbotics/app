/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGrades_students = {
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_students">;
    readonly " $refType": "StudentGrades_students";
};
export type StudentGrades_students$data = StudentGrades_students;
export type StudentGrades_students$key = {
    readonly " $data"?: StudentGrades_students$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_students">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentGrades_students",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StudentGradesTable_students",
      "args": null
    }
  ]
};
(node as any).hash = '18930308d672ca8eff1efa3a4a82f6b8';
export default node;
