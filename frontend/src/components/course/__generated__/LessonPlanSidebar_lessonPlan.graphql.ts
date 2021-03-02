/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanSidebar_lessonPlan = {
    readonly id: string | null;
    readonly lessons: ReadonlyArray<{
        readonly id: string | null;
        readonly title: string | null;
        readonly slides: ReadonlyArray<{
            readonly id: string | null;
        } | null> | null;
    } | null> | null;
    readonly " $refType": "LessonPlanSidebar_lessonPlan";
};
export type LessonPlanSidebar_lessonPlan$data = LessonPlanSidebar_lessonPlan;
export type LessonPlanSidebar_lessonPlan$key = {
    readonly " $data"?: LessonPlanSidebar_lessonPlan$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_lessonPlan">;
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
  "name": "LessonPlanSidebar_lessonPlan",
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "slides",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": true,
          "selections": [
            (v0/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'dc58909a0cfeb915c90d30245528cb13';
export default node;
