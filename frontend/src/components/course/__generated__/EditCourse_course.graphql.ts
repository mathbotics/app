/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_course = {
    readonly id: string;
    readonly name: string;
    readonly courses: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_courseLessons">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course" | "EditCourseDetails_course">;
    readonly " $refType": "EditCourse_course";
};
export type EditCourse_course$data = EditCourse_course;
export type EditCourse_course$key = {
    readonly " $data"?: EditCourse_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditCourse_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
          "kind": "FragmentSpread",
          "name": "EditCourseLessonPlan_courseLessons",
          "args": null
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
(node as any).hash = '1422fe96b8b7f36a2a7d2b03c98b6db6';
export default node;
