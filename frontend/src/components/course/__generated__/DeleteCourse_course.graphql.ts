/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCourse_course = {
    readonly id: string;
    readonly " $refType": "DeleteCourse_course";
};
export type DeleteCourse_course$data = DeleteCourse_course;
export type DeleteCourse_course$key = {
    readonly " $data"?: DeleteCourse_course$data;
    readonly " $fragmentRefs": FragmentRefs<"DeleteCourse_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DeleteCourse_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ac1e20ea6f7859fde4e8ae7177a0627f';
export default node;
