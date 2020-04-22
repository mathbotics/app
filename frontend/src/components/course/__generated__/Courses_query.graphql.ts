/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Courses_query = {
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_courses">;
    readonly " $refType": "Courses_query";
};
export type Courses_query$data = Courses_query;
export type Courses_query$key = {
    readonly " $data"?: Courses_query$data;
    readonly " $fragmentRefs": FragmentRefs<"Courses_query">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Courses_query",
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
(node as any).hash = 'ac6a5a7d04f4e180f267c4f1f6077ba4';
export default node;
