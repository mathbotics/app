/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_lessonPlan = {
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_lessonPlan" | "LessonPlanCatalogue_lessonPlan">;
    readonly " $refType": "EditCourseLessonPlan_lessonPlan";
};
export type EditCourseLessonPlan_lessonPlan$data = EditCourseLessonPlan_lessonPlan;
export type EditCourseLessonPlan_lessonPlan$key = {
    readonly " $data"?: EditCourseLessonPlan_lessonPlan$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_lessonPlan">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourseLessonPlan_lessonPlan",
  "type": "LessonPlan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanSidebar_lessonPlan",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanCatalogue_lessonPlan",
      "args": null
    }
  ]
};
(node as any).hash = '0c0f5bca2098022b57d29ace245f5de3';
export default node;
