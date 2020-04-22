/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Lesson_lesson = {
    readonly id: string;
    readonly title: string;
    readonly slides: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"EditorSlidePreview_slide">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"SlidesSidebar_lesson">;
    readonly " $refType": "Lesson_lesson";
};
export type Lesson_lesson$data = Lesson_lesson;
export type Lesson_lesson$key = {
    readonly " $data"?: Lesson_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"Lesson_lesson">;
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
  "name": "Lesson_lesson",
  "type": "Lesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
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
        {
          "kind": "FragmentSpread",
          "name": "EditorSlidePreview_slide",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "SlidesSidebar_lesson",
      "args": null
    }
  ]
};
})();
(node as any).hash = '86fb4af73f4fcf40607c3438a4107d32';
export default node;
