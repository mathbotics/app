/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesList_viewers = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"CourseCard_viewer">;
    };
};
export type CoursesList_viewers$data = CoursesList_viewers;
export type CoursesList_viewers$key = {
    readonly " $data"?: CoursesList_viewers$data;
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_viewers">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CoursesList_viewers",
  "type": "Query",
  "metadata": {
    "mask": false
  },
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
          "kind": "FragmentSpread",
          "name": "CourseCard_viewer",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '4dfc1100e87b8f9ffc5f7f8cac225bef';
export default node;
