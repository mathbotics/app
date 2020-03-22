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
        const { mainBlock } = nullthrows(
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
          mainBlock?.textBlock ?? mainBlock?.multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
    t.field('sideBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { sideBlock } = nullthrows(
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
          sideBlock?.textBlock ?? sideBlock?.multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
