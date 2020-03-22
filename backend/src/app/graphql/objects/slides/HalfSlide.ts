import { objectType } from 'nexus';
import nullthrows from 'nullthrows';
import prisma from '../../../data/prisma';

export const HalfSlide = objectType({
  name: 'HalfSlide',
  definition(t) {
    t.model.id();
    t.field('firstHalfBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { firstHalfBlock } = nullthrows(
          await prisma.halfSlide.findOne({
            where: { id },
            include: {
              firstHalfBlock: {
                include: { textBlock: true, multipleChoiceQuestionBlock: true },
              },
            },
          }),
          'HalfSlide not found',
        );
        return nullthrows(
          firstHalfBlock?.textBlock ??
            firstHalfBlock?.multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
    t.field('secondHalfBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { secondHalfBlock } = nullthrows(
          await prisma.halfSlide.findOne({
            where: { id },
            include: {
              secondHalfBlock: {
                include: { textBlock: true, multipleChoiceQuestionBlock: true },
              },
            },
          }),
          'HalfSlide not found',
        );
        return nullthrows(
          secondHalfBlock?.textBlock ??
            secondHalfBlock?.multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
