/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanSidebar_lessons = {
    readonly id: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    }>;
    readonly " $refType": "LessonPlanSidebar_lessons";
};
export type LessonPlanSidebar_lessons$data = LessonPlanSidebar_lessons;
export type LessonPlanSidebar_lessons$key = {
    readonly " $data"?: LessonPlanSidebar_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_lessons">;
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
  "name": "LessonPlanSidebar_lessons",
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
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '8e730f0ebedd56fed51d98cd34481c93';
export default node;
