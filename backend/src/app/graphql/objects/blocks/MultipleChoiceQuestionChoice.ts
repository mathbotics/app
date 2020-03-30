import { objectType } from 'nexus';

export const MultipleChoiceQuestionChoice = objectType({
  name: 'MultipleChoiceQuestionChoice',
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.correct();
  },
});
