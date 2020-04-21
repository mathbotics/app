/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_query = {
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanCatalogue_query">;
    readonly " $refType": "EditCourseLessonPlan_query";
};
export type EditCourseLessonPlan_query$data = EditCourseLessonPlan_query;
export type EditCourseLessonPlan_query$key = {
    readonly " $data"?: EditCourseLessonPlan_query$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_query">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourseLessonPlan_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanCatalogue_query",
      "args": null
    }
  ]
};
(node as any).hash = '18e446daa0224b466f37873f857cc4f5';
export default node;
