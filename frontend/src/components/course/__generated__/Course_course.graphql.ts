/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Course_course = {
    readonly id: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly lessonPlan: {
        readonly id: string | null;
        readonly lessons: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
            readonly slides: ReadonlyArray<{
                readonly id: string | null;
            } | null> | null;
        } | null> | null;
    } | null;
    readonly " $refType": "Course_course";
};
export type Course_course$data = Course_course;
export type Course_course$key = {
    readonly " $data"?: Course_course$data;
    readonly " $fragmentRefs": FragmentRefs<"Course_course">;
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
  "name": "Course_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lessonPlan",
      "storageKey": null,
      "args": null,
      "concreteType": "LessonPlan",
      "plural": false,
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
    }
  ]
};
})();
(node as any).hash = '2b7d69bd7e24c7f58fc7d4d748e53f48';
export default node;
