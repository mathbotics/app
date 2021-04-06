/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGrades_grades = {
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_grades">;
    readonly " $refType": "StudentGrades_grades";
};
export type StudentGrades_grades$data = StudentGrades_grades;
export type StudentGrades_grades$key = {
    readonly " $data"?: StudentGrades_grades$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_grades">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentGrades_grades",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StudentGradesTable_grades",
      "args": null
    }
  ]
};
(node as any).hash = '8c72109094b03c24878c73da19a541e5';
export default node;
