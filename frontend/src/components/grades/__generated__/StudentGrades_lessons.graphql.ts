/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type StudentGrades_lessons = {
  readonly ' $fragmentRefs': FragmentRefs<'StudentGradesTable_lessons'>;
  readonly ' $refType': 'StudentGrades_lessons';
};
export type StudentGrades_lessons$data = StudentGrades_lessons;
export type StudentGrades_lessons$key = {
  readonly ' $data'?: StudentGrades_lessons$data;
  readonly ' $fragmentRefs': FragmentRefs<'StudentGrades_lessons'>;
};

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'StudentGrades_lessons',
  type: 'Query',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'FragmentSpread',
      name: 'StudentGradesTable_lessons',
      args: null,
    },
  ],
};
(node as any).hash = '3df29f1a2a44435dbadc97834ffa4865';
export default node;
