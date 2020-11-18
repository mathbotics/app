/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StudentGrades_studentGrades = {
    readonly viewer: {
        readonly firstName: string;
        readonly lastName: string;
        readonly email?: string;
    };
    readonly " $refType": "StudentGrades_studentGrades";
};
export type StudentGrades_studentGrades$data = StudentGrades_studentGrades;
export type StudentGrades_studentGrades$key = {
    readonly " $data"?: StudentGrades_studentGrades$data;
    readonly " $fragmentRefs": FragmentRefs<"StudentGrades_studentGrades">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "StudentGrades_studentGrades",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
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
          "kind": "InlineFragment",
          "type": "Instructor",
          "selections": (v0/*: any*/)
        },
        {
          "kind": "InlineFragment",
          "type": "Admin",
          "selections": (v0/*: any*/)
        }
      ]
    }
  ]
};
})();
(node as any).hash = '228409fc086f0b9ccd8e05f4aa6db98c';
export default node;
