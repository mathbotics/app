/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanSidebar_course = {
    readonly id: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    }>;
    readonly " $refType": "LessonPlanSidebar_course";
};
export type LessonPlanSidebar_course$data = LessonPlanSidebar_course;
export type LessonPlanSidebar_course$key = {
    readonly " $data"?: LessonPlanSidebar_course$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_course">;
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
  "name": "LessonPlanSidebar_course",
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
    }
  ]
};
})();
(node as any).hash = '282e70925e023af98329b7365ec7bcfe';
export default node;
