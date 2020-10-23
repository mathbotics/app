/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditCourseStudents_course = {
    readonly id: string;
    readonly students: ReadonlyArray<{
        readonly id: string;
    }>;
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
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "Student",
      "plural": true,
      "selections": [
        (v0/*: any*/)
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
(node as any).hash = 'be36f44c255b5a4a8ed04cdbaf5b58d3';
export default node;
