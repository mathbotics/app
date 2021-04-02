/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type withSidebar_viewer = {
    readonly id: string;
    readonly role: string;
    readonly " $refType": "withSidebar_viewer";
};
export type withSidebar_viewer$data = withSidebar_viewer;
export type withSidebar_viewer$key = {
    readonly " $data"?: withSidebar_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"withSidebar_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "withSidebar_viewer",
  "type": "User",
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
      "alias": "role",
      "name": "__typename",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'b5ac0684e78c59bee0424e955a99edf4';
export default node;
