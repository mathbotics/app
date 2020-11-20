/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CourseCard_viewer = {
    readonly role: string;
};
export type CourseCard_viewer$data = CourseCard_viewer;
export type CourseCard_viewer$key = {
    readonly " $data"?: CourseCard_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CourseCard_viewer",
  "type": "User",
  "metadata": {
    "mask": false
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "role",
      "name": "__typename",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'd8f5ca6ab3cfa8531aea94c2a6935f1f';
export default node;
