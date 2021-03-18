/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanCatalogue_courseLessons = {
    readonly courseId: string;
    readonly lesson: {
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    };
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
(node as any).hash = 'fc4c50702100d5080a9e51f6c7440218';
export default node;
