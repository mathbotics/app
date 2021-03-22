/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_course = {
    readonly id: string;
    readonly name: string;
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
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course" | "EditCourseDetails_course">;
    readonly " $refType": "EditCourse_course";
};
export type EditCourse_course$data = EditCourse_course;
export type EditCourse_course$key = {
    readonly " $data"?: EditCourse_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
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
  "name": "EditCourse_course",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "EditCourseStudents_course",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EditCourseDetails_course",
      "args": null
    }
  ]
};
})();
(node as any).hash = 'a4fefa96a4de30b701e62838ed29a3c5';
export default node;
