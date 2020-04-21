/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CoursesList_courses = {
    readonly courses: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
    }>;
    readonly " $refType": "CoursesList_courses";
};
export type CoursesList_courses$data = CoursesList_courses;
export type CoursesList_courses$key = {
    readonly " $data"?: CoursesList_courses$data;
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_courses">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CoursesList_courses",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "courses",
      "storageKey": null,
      "args": null,
      "concreteType": "Course",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "CourseCard_course",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '7c7b75fef6c6444fff77726f9cc999e8';
export default node;
