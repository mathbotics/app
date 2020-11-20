/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type InstructorGradebookTable_lessons = {
  readonly lessons: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly slides: ReadonlyArray<{
      readonly id: string;
    }>;
  }>;
  readonly ' $refType': 'InstructorGradebookTable_lessons';
};
export type InstructorGradebookTable_lessons$data = InstructorGradebookTable_lessons;
export type InstructorGradebookTable_lessons$key = {
  readonly ' $data'?: InstructorGradebookTable_lessons$data;
  readonly ' $fragmentRefs': FragmentRefs<'InstructorGradebookTable_lessons'>;
};

const node: ReaderFragment = (function() {
  var v0 = {
    kind: 'ScalarField',
    alias: null,
    name: 'id',
    args: null,
    storageKey: null,
  };
  return {
    kind: 'Fragment',
    name: 'InstructorGradebookTable_lessons',
    type: 'Query',
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'lessons',
        storageKey: null,
        args: null,
        concreteType: 'Lesson',
        plural: true,
        selections: [
          v0 /*: any*/,
          {
            kind: 'ScalarField',
            alias: null,
            name: 'title',
            args: null,
            storageKey: null,
          },
          {
            kind: 'LinkedField',
            alias: null,
            name: 'slides',
            storageKey: null,
            args: null,
            concreteType: null,
            plural: true,
            selections: [v0 /*: any*/],
          },
        ],
      },
    ],
  };
})();
(node as any).hash = '340ce65dba6a228520470215523a530d';
export default node;
