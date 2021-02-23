/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesList_user = {
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_user">;
    readonly " $refType": "CoursesList_user";
};
export type CoursesList_user$data = CoursesList_user;
export type CoursesList_user$key = {
    readonly " $data"?: CoursesList_user$data;
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CoursesList_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CourseCard_user",
      "args": null
    }
  ]
};
(node as any).hash = '14b7dba82c1fbb970d32746b4173e4f2';
export default node;
