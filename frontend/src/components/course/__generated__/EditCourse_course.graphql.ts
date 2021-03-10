/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_course = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course" | "EditCourseDetails_course">;
    readonly " $refType": "EditCourse_course";
};
export type EditCourse_course$data = EditCourse_course;
export type EditCourse_course$key = {
    readonly " $data"?: EditCourse_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourse_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EditCourseStudents_course",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EditCourseDetails_course",
      "args": null
    }
  ]
};
(node as any).hash = '2ab62a0fdecff45d2f3ce2437179cdbc';
export default node;
