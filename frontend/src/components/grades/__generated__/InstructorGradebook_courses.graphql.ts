/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InstructorGradebook_courses = {
    readonly id: string;
    readonly name: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    }>;
    readonly students: ReadonlyArray<{
        readonly firstName: string;
        readonly lastName: string;
        readonly grades: ReadonlyArray<{
            readonly lessonId: string;
            readonly courseId: string;
            readonly grade: number;
        }>;
    }>;
    readonly " $refType": "InstructorGradebook_courses";
};
export type InstructorGradebook_courses$data = InstructorGradebook_courses;
export type InstructorGradebook_courses$key = {
    readonly " $data"?: InstructorGradebook_courses$data;
    readonly " $fragmentRefs": FragmentRefs<"InstructorGradebook_courses">;
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
  "name": "InstructorGradebook_courses",
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
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "Student",
      "plural": true,
      "selections": [
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
          "kind": "LinkedField",
          "alias": null,
          "name": "grades",
          "storageKey": null,
          "args": null,
          "concreteType": "Grade",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lessonId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "courseId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "grade",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '800da11898c4d64ff367b265d7939782';
export default node;
