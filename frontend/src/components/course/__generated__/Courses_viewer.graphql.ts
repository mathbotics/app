/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Courses_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_viewers">;
};
export type Courses_viewer$data = Courses_viewer;
export type Courses_viewer$key = {
    readonly " $data"?: Courses_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"Courses_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Courses_viewer",
  "type": "Query",
  "metadata": {
    "mask": false
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CoursesList_viewers",
      "args": null
    }
  ]
};
(node as any).hash = 'c8b11f24046cdfd21b559532066e3d10';
export default node;
