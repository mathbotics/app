/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Course_course = {
    readonly id: string;
    readonly name: string;
    readonly description: string | null;
    readonly " $refType": "Course_course";
};
export type Course_course$data = Course_course;
export type Course_course$key = {
    readonly " $data"?: Course_course$data;
    readonly " $fragmentRefs": FragmentRefs<"Course_course">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Course_course",
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4873ad7123d63a0e7bb31728ddbefc6c';
export default node;
