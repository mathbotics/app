/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebookTable_grades = {
    readonly grades: ReadonlyArray<{
        readonly courseId: string;
        readonly lessonId: string;
        readonly grade: number;
    } | null> | null;
    readonly " $refType": "InstructorGradebookTable_grades";
};
export type InstructorGradebookTable_grades$data = InstructorGradebookTable_grades;
export type InstructorGradebookTable_grades$key = {
    readonly " $data"?: InstructorGradebookTable_grades$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebookTable_grades">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "InstructorGradebookTable_grades",
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
          "name": "grade",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '7ea39f23f79cad0cb076f66ca8816e3f';
export default node;
