/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Courses_courses = {
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_courses">;
    readonly " $refType": "Courses_courses";
};
export type Courses_courses$data = Courses_courses;
export type Courses_courses$key = {
    readonly " $data"?: Courses_courses$data;
    readonly " $fragmentRefs": FragmentRefs<"Courses_courses">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Courses_courses",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CoursesList_courses",
      "args": null
    }
  ]
};
(node as any).hash = 'c86d60d6903b5edec41de03acabae5b6';
export default node;
