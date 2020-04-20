/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_lessonPlan = {
    readonly id: string;
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
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '5ace29e0756a4acace8686836c95067e';
export default node;
