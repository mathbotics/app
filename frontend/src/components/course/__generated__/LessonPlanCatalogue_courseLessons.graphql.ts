/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanCatalogue_courseLessons = {
    readonly id: string;
    readonly courses: ReadonlyArray<{
        readonly lesson: {
            readonly id: string;
            readonly title: string;
            readonly slides: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
            }>;
        };
    }>;
    readonly " $refType": "LessonPlanCatalogue_courseLessons";
};
export type LessonPlanCatalogue_courseLessons$data = LessonPlanCatalogue_courseLessons;
export type LessonPlanCatalogue_courseLessons$key = {
    readonly " $data"?: LessonPlanCatalogue_courseLessons$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanCatalogue_courseLessons">;
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
  "name": "LessonPlanCatalogue_courseLessons",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "courses",
      "storageKey": null,
      "args": null,
      "concreteType": "CourseToLesson",
      "plural": true,
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
        }
      ]
    }
  ]
};
})();
(node as any).hash = '7775732c35c1bda50bfd31f541f3d6da';
export default node;
