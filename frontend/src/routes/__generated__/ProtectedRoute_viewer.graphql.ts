/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProtectedRoute_viewer = {
    readonly role: string;
    readonly " $refType": "ProtectedRoute_viewer";
};
export type ProtectedRoute_viewer$data = ProtectedRoute_viewer;
export type ProtectedRoute_viewer$key = {
    readonly " $data"?: ProtectedRoute_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ProtectedRoute_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProtectedRoute_viewer",
  "type": "User",
  "metadata": null,
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
(node as any).hash = '24c8e8a63cf8606e23edf9189f95ff07';
export default node;
