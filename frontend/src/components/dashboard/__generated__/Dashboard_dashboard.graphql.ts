/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Dashboard_dashboard = {
    readonly viewer: {
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly email?: string | null;
    } | null;
    readonly " $refType": "Dashboard_dashboard";
};
export type Dashboard_dashboard$data = Dashboard_dashboard;
export type Dashboard_dashboard$key = {
    readonly " $data"?: Dashboard_dashboard$data;
    readonly " $fragmentRefs": FragmentRefs<"Dashboard_dashboard">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Dashboard_dashboard",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "firstName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lastName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "type": "Instructor",
          "selections": (v0/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "Admin",
          "selections": (v0/*: any*/)
        }
      ]
    }
  ]
};
})();
(node as any).hash = '1ca1b6604c70994110028b9bcef8690a';
export default node;
