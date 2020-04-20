/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CoursesList_courses = {
    readonly courses: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly suggestedLevel: GradeLevel;
        readonly instructors: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly lessonPlan: {
            readonly lessons: ReadonlyArray<{
                readonly title: string;
            }>;
        };
    }>;
    readonly " $refType": "CoursesList_courses";
};
export type CoursesList_courses$data = CoursesList_courses;
export type CoursesList_courses$key = {
    readonly " $data"?: CoursesList_courses$data;
    readonly " $fragmentRefs": FragmentRefs<"CoursesList_courses">;
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
  "name": "CoursesList_courses",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "courses",
      "storageKey": null,
      "args": null,
      "concreteType": "Course",
      "plural": true,
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
          "name": "suggestedLevel",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "instructors",
          "storageKey": null,
          "args": null,
          "concreteType": "Instructor",
          "plural": true,
          "selections": [
            (v0/*: any*/)
          ]
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
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "lessons",
              "storageKey": null,
              "args": null,
              "concreteType": "Lesson",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "title",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '70fc0e5fb780036da506516adc7bb7ef';
export default node;
