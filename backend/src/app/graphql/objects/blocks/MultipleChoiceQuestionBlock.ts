import { objectType } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const MultipleChoiceQuestionBlock = objectType({
  name: 'MultipleChoiceQuestionBlock',
  definition(t) {
    t.string('id');
    t.string('text', {
      async resolve({ id }) {
        const { multipleChoiceQuestionBlock } = nullthrows(
          await prisma.block.findOne({
            where: { id },
            include: { multipleChoiceQuestionBlock: true },
          }),
          'No block found',
        );
        const { text } = nullthrows(multipleChoiceQuestionBlock);
        return text;
      },
    });
    t.list.field('choice', {
      type: 'MultipleChoiceQuestionChoice',
      async resolve({ id }) {
        const { multipleChoiceQuestionBlock } = nullthrows(
          await prisma.block.findOne({
            where: { id },
            include: {
              multipleChoiceQuestionBlock: {
                include: {
                  choices: true,
                },
              },
            },
          }),
          'No block found',
        );
        const { choices } = nullthrows(multipleChoiceQuestionBlock);
        return choices;
      },
    });
    t.field('correctChoice', {
      type: 'MultipleChoiceQuestionChoice',
      async resolve({ id }) {
        const { multipleChoiceQuestionBlock } = nullthrows(
          await prisma.block.findOne({
            where: { id },
            include: {
              multipleChoiceQuestionBlock: {
                include: {
                  correctChoice: true,
                },
              },
            },
          }),
          'No block found',
        );
        const { correctChoice } = nullthrows(multipleChoiceQuestionBlock);
        return correctChoice;
      },
    });
  },
});
