/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesList_viewer = {
    readonly __typename: string;
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_viewer">;
    readonly " $refType": "CoursesList_viewer";
};
export type CoursesList_viewer$data = CoursesList_viewer;
export type CoursesList_viewer$key = {
    readonly " $data"?: CoursesList_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CoursesList_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CourseCard_viewer",
      "args": null
    }
  ]
};
(node as any).hash = '7caa1c64238277d0176529931bfa1d55';
export default node;
