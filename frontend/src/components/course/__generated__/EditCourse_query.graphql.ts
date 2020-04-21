/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_query = {
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_query">;
    readonly " $refType": "EditCourse_query";
};
export type EditCourse_query$data = EditCourse_query;
export type EditCourse_query$key = {
    readonly " $data"?: EditCourse_query$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_query">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourse_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "EditCourseLessonPlan_query",
      "args": null
    }
  ]
};
(node as any).hash = 'f295c07832512d7cd6250b03d09afc0b';
export default node;
