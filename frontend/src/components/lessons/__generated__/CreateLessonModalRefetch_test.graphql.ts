/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateLessonModalRefetch_test = {
    readonly lessons: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    }>;
    readonly " $refType": "CreateLessonModalRefetch_test";
};
export type CreateLessonModalRefetch_test$data = CreateLessonModalRefetch_test;
export type CreateLessonModalRefetch_test$key = {
    readonly " $data"?: CreateLessonModalRefetch_test$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateLessonModalRefetch_test">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CreateLessonModalRefetch_test",
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
          "name": "title",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '50b7a097181b06b1da87f2802d76e72c';
export default node;
