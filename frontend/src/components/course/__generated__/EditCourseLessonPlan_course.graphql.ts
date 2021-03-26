/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_course = {
    readonly id: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_course" | "LessonPlanCatalogue_course">;
    readonly " $refType": "EditCourseLessonPlan_course";
};
export type EditCourseLessonPlan_course$data = EditCourseLessonPlan_course;
export type EditCourseLessonPlan_course$key = {
    readonly " $data"?: EditCourseLessonPlan_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_course">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EditCourseLessonPlan_course",
  "type": "Course",
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
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "slides",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanSidebar_course",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanCatalogue_course",
      "args": null
    }
  ]
};
})();
(node as any).hash = '5bb9d58c0941a64363a35d0b5f2334a9';
export default node;
