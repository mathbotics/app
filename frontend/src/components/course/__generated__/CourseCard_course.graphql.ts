/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseCard_course = {
    readonly id: string;
    readonly name: string;
    readonly suggestedLevel: GradeLevel;
    readonly instructors: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly username: string;
    };
    readonly " $refType": "CourseCard_course";
};
export type CourseCard_course$data = CourseCard_course;
export type CourseCard_course$key = {
    readonly " $data"?: CourseCard_course$data;
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
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
  "name": "CourseCard_course",
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
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "name": "username",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '0277468ebe605e3c325fb16f3c9dadb9';
export default node;
