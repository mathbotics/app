/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseDetails_course = {
    readonly id: string | null;
    readonly " $refType": "EditCourseDetails_course";
};
export type EditCourseDetails_course$data = EditCourseDetails_course;
export type EditCourseDetails_course$key = {
    readonly " $data"?: EditCourseDetails_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseDetails_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourseDetails_course",
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
(node as any).hash = '164b1505a2b3f4a64064c7c79d38999b';
export default node;
