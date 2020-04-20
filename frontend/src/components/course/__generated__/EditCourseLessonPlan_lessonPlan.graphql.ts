/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_lessonPlan = {
    readonly id: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
    }>;
    readonly " $refType": "EditCourseLessonPlan_lessonPlan";
};
export type EditCourseLessonPlan_lessonPlan$data = EditCourseLessonPlan_lessonPlan;
export type EditCourseLessonPlan_lessonPlan$key = {
    readonly " $data"?: EditCourseLessonPlan_lessonPlan$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_lessonPlan">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EditCourseLessonPlan_lessonPlan",
  "type": "LessonPlan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lessons",
      "storageKey": null,
      "args": null,
      "concreteType": "Lesson",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
(node as any).hash = 'bff24ff19064d636acbe282e776147e9';
export default node;
