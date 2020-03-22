import { objectType } from 'nexus';

export const MultipleChoiceQuestionBlock = objectType({
  name: 'MultipleChoiceQuestionBlock',
  definition(t) {
    t.model.id();
    t.model.text();
    // @ts-ignore
    t.model.choices();
    // @ts-ignore
    t.model.correctChoice();
  },
});
