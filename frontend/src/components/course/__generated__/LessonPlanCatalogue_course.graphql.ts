/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanCatalogue_course = {
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
    readonly " $refType": "LessonPlanCatalogue_course";
};
export type LessonPlanCatalogue_course$data = LessonPlanCatalogue_course;
export type LessonPlanCatalogue_course$key = {
    readonly " $data"?: LessonPlanCatalogue_course$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanCatalogue_course">;
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
  "name": "LessonPlanCatalogue_course",
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
(node as any).hash = 'd638d88ff3216324f9d3a6abf69853dc';
export default node;
