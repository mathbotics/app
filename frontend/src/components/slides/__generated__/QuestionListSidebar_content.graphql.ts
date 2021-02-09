/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuestionListSidebar_content = {
    readonly id: string;
    readonly title: string;
    readonly slides: ReadonlyArray<{
        readonly id: string;
        readonly __typename: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"SingleSlide_singleSlide" | "HalfSlide_halfSlide">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"Lesson_lesson">;
    readonly " $refType": "QuestionListSidebar_content";
};
export type QuestionListSidebar_content$data = QuestionListSidebar_content;
export type QuestionListSidebar_content$key = {
    readonly " $data"?: QuestionListSidebar_content$data;
    readonly " $fragmentRefs": FragmentRefs<"QuestionListSidebar_content">;
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
  "name": "QuestionListSidebar_content",
  "type": "Lesson",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "__typename",
          "args": null,
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "kind": "InlineFragment",
          "type": "SingleSlide",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SingleSlide_singleSlide",
              "args": null
            }
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "HalfSlide",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "HalfSlide_halfSlide",
              "args": null
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Lesson_lesson",
      "args": null
    }
  ]
};
})();
(node as any).hash = 'feab60afea2c41f93a96f63904df2ab9';
export default node;
