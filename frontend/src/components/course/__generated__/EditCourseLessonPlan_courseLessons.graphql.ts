/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseLessonPlan_courseLessons = {
    readonly lesson: {
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    };
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_courseLessons" | "LessonPlanCatalogue_courseLessons">;
    readonly " $refType": "EditCourseLessonPlan_courseLessons";
};
export type EditCourseLessonPlan_courseLessons$data = EditCourseLessonPlan_courseLessons;
export type EditCourseLessonPlan_courseLessons$key = {
    readonly " $data"?: EditCourseLessonPlan_courseLessons$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_courseLessons">;
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
  "name": "EditCourseLessonPlan_courseLessons",
  "type": "CourseToLesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lesson",
      "storageKey": null,
      "args": null,
      "concreteType": "Lesson",
      "plural": false,
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
      "name": "LessonPlanSidebar_courseLessons",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "LessonPlanCatalogue_courseLessons",
      "args": null
    }
  ]
};
})();
(node as any).hash = '7cae8522b6d7e9f818a5e33faebf12a5';
export default node;
