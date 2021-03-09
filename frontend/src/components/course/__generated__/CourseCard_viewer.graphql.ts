/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CourseCard_viewer = {
    readonly __typename: string;
    readonly " $refType": "CourseCard_viewer";
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
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '54febb2c8f6dd36de99c8071782be5f6';
export default node;
