/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanCatalogue_query = {
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
        }>;
    }>;
    readonly " $refType": "LessonPlanCatalogue_query";
};
export type LessonPlanCatalogue_query$data = LessonPlanCatalogue_query;
export type LessonPlanCatalogue_query$key = {
    readonly " $data"?: LessonPlanCatalogue_query$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanCatalogue_query">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "LessonPlanCatalogue_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
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
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "slides",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '8131d818495af04cd4269679a72e9cf4';
export default node;
