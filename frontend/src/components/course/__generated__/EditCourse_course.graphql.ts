/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourse_course = {
    readonly id: string;
    readonly name: string;
    readonly lessonPlan: {
        readonly " $fragmentRefs": FragmentRefs<"EditCourseLessonPlan_lessonPlan">;
    };
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course">;
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
      "name": "lessonPlan",
      "storageKey": null,
      "args": null,
      "concreteType": "LessonPlan",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "EditCourseLessonPlan_lessonPlan",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "EditCourseStudents_course",
      "args": null
    }
  ]
};
(node as any).hash = '4ac8e6dc1e3116e8b0589c4fa40fdd7f';
export default node;
