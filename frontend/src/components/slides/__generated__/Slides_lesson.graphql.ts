/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slides_lesson = {
    readonly id: string | null;
    readonly title: string | null;
    readonly slides: ReadonlyArray<{
        readonly id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"EditorSlidePreview_slide">;
    } | null> | null;
    readonly " $fragmentRefs": FragmentRefs<"SlidesSidebar_lesson">;
    readonly " $refType": "Slides_lesson";
};
export type Slides_lesson$data = Slides_lesson;
export type Slides_lesson$key = {
    readonly " $data"?: Slides_lesson$data;
    readonly " $fragmentRefs": FragmentRefs<"Slides_lesson">;
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
  "name": "Slides_lesson",
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
(node as any).hash = 'c03261f676ce8bb580868da6b60f4c76';
export default node;
