/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CourseCard_user = {
    readonly role: string;
    readonly " $refType": "CourseCard_user";
};
export type CourseCard_user$data = CourseCard_user;
export type CourseCard_user$key = {
    readonly " $data"?: CourseCard_user$data;
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CourseCard_user",
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
(node as any).hash = '8277599ceeb2f30ef839ddcf8faa19b5';
export default node;
