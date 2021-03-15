/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type EditCourseStudents_course = {
    readonly id: string;
    readonly courseTo: ReadonlyArray<{
        readonly student: {
            readonly username: string;
            readonly firstName: string;
            readonly lastName: string;
            readonly gradeLevel: GradeLevel;
            readonly id: string;
        } | null;
    } | null> | null;
    readonly " $fragmentRefs": FragmentRefs<"StudentsTable_course">;
    readonly " $refType": "EditCourseStudents_course";
};
export type EditCourseStudents_course$data = EditCourseStudents_course;
export type EditCourseStudents_course$key = {
    readonly " $data"?: EditCourseStudents_course$data;
    readonly " $fragmentRefs": FragmentRefs<"EditCourseStudents_course">;
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
  "name": "EditCourseStudents_course",
  "type": "Course",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "courseTo",
      "storageKey": null,
      "args": null,
      "concreteType": "CourseToStudent",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "student",
          "storageKey": null,
          "args": null,
          "concreteType": "Student",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "username",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "firstName",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lastName",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "gradeLevel",
              "args": null,
              "storageKey": null
            },
            (v0/*: any*/)
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "StudentsTable_course",
      "args": null
    }
  ]
};
})();
(node as any).hash = '07d5d578028aecec25dffb8def78f99b';
export default node;
