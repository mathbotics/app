/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanSidebar_courseLessons = {
    readonly courseId: string;
    readonly lesson: {
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    };
    readonly " $refType": "LessonPlanSidebar_courseLessons";
};
export type LessonPlanSidebar_courseLessons$data = LessonPlanSidebar_courseLessons;
export type LessonPlanSidebar_courseLessons$key = {
    readonly " $data"?: LessonPlanSidebar_courseLessons$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_courseLessons">;
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
  "name": "LessonPlanSidebar_courseLessons",
  "type": "CourseToLesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "courseId",
      "args": null,
      "storageKey": null
    },
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
    }
  ]
};
})();
(node as any).hash = '0d457ce4e3e8a7040a5aacd9f7531eba';
export default node;
