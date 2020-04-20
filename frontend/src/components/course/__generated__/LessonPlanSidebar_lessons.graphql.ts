/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LessonPlanSidebar_lessons = {
    readonly title: string;
    readonly slides: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Slide_slide">;
    }>;
    readonly " $refType": "LessonPlanSidebar_lessons";
};
export type LessonPlanSidebar_lessons$data = LessonPlanSidebar_lessons;
export type LessonPlanSidebar_lessons$key = {
    readonly " $data"?: LessonPlanSidebar_lessons$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonPlanSidebar_lessons">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "LessonPlanSidebar_lessons",
  "type": "Lesson",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Slide_slide",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'b3eb3b57610eda79a42fbf5842492f48';
export default node;
