/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseCard_course = {
    readonly id: string;
    readonly name: string;
    readonly suggestedLevel: GradeLevel;
    readonly " $refType": "CourseCard_course";
};
export type CourseCard_course$data = CourseCard_course;
export type CourseCard_course$key = {
    readonly " $data"?: CourseCard_course$data;
    readonly " $fragmentRefs": FragmentRefs<"CourseCard_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CourseCard_course",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "suggestedLevel",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'c30b9f2a9c81c9231f483d0128759964';
export default node;
