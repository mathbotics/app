/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanCatalogue_lessonPlan = {
    readonly id: string;
    readonly lessons: ReadonlyArray<{
        readonly id: string;
    }>;
    readonly " $refType": "LessonPlanCatalogue_lessonPlan";
};
export type LessonPlanCatalogue_lessonPlan$data = LessonPlanCatalogue_lessonPlan;
export type LessonPlanCatalogue_lessonPlan$key = {
    readonly " $data"?: LessonPlanCatalogue_lessonPlan$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanCatalogue_lessonPlan">;
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
  "name": "LessonPlanCatalogue_lessonPlan",
  "type": "LessonPlan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lessons",
      "storageKey": null,
      "args": null,
      "concreteType": "Lesson",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
(node as any).hash = '5e518597b585e9e1506c473b438e199e';
export default node;
