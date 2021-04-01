/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGradesTable_grades = {
    readonly grades: ReadonlyArray<{
        readonly courseId: string;
        readonly lessonId: string;
        readonly studentId: string;
        readonly grade: number;
    } | null> | null;
    readonly " $refType": "StudentGradesTable_grades";
};
export type StudentGradesTable_grades$data = StudentGradesTable_grades;
export type StudentGradesTable_grades$key = {
    readonly " $data"?: StudentGradesTable_grades$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGradesTable_grades">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "StudentGradesTable_grades",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "grades",
      "storageKey": null,
      "args": null,
      "concreteType": "Grade",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "courseId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lessonId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "studentId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "grade",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'de53531cd560dd7572029b8f21812b46';
export default node;
