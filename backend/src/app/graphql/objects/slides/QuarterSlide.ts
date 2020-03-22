import { objectType } from 'nexus';
import nullthrows from 'nullthrows';
import prisma from '../../../data/prisma';

export const QuarterSlide = objectType({
  name: 'QuarterSlide',
  definition(t) {
    t.model.id();
    t.field('mainBlock', {
      type: 'Block',
      async resolve({ id }) {
        const {
          mainBlock: { textBlock, multipleChoiceQuestionBlock },
        } = nullthrows(
          await prisma.quarterSlide.findOne({
            where: { id },
            include: {
              mainBlock: {
                include: { textBlock: true, multipleChoiceQuestionBlock: true },
              },
            },
          }),
          'QuarterSlide not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
    t.field('sideBlock', {
      type: 'Block',
      async resolve({ id }) {
        const {
          sideBlock: { textBlock, multipleChoiceQuestionBlock },
        } = nullthrows(
          await prisma.quarterSlide.findOne({
            where: { id },
            include: {
              sideBlock: {
                include: { textBlock: true, multipleChoiceQuestionBlock: true },
              },
            },
          }),
          'QuarterSlide not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
