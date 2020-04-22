/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_lessonPlan = {
    readonly lessons: ReadonlyArray<{
        readonly id: string;
    }>;
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
      "kind": "LinkedField",
      "alias": null,
      "name": "lessons",
      "storageKey": null,
      "args": null,
      "concreteType": "Lesson",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
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
(node as any).hash = '99e51289c4684e34a323c014b7b7f17e';
export default node;
