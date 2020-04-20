/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_course = {
    readonly id: string;
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
    }
  ]
};
(node as any).hash = 'd9fe320ed013647bc628888584f75269';
export default node;
