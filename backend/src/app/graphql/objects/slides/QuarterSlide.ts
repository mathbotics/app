import { objectType } from 'nexus';
import nullthrows from 'nullthrows';
import prisma from '../../../data/prisma';

export const QuarterSlide = objectType({
  name: 'QuarterSlide',
  definition(t) {
    t.implements('Slide');
    t.field('mainBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { quarterSlide } = nullthrows(
          await prisma.slide.findOne({
            where: { id },
            include: {
              quarterSlide: {
                include: {
                  mainBlock: {
                    include: {
                      textBlock: true,
                      multipleChoiceQuestionBlock: true,
                    },
                  },
                },
              },
            },
          }),
          'QuarterSlide not found',
        );
        const { textBlock, multipleChoiceQuestionBlock } = nullthrows(
          quarterSlide?.mainBlock,
          'mainBlock not found',
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
        const { quarterSlide } = nullthrows(
          await prisma.slide.findOne({
            where: { id },
            include: {
              quarterSlide: {
                include: {
                  sideBlock: {
                    include: {
                      textBlock: true,
                      multipleChoiceQuestionBlock: true,
                    },
                  },
                },
              },
            },
          }),
          'QuarterSlide not found',
        );
        const { textBlock, multipleChoiceQuestionBlock } = nullthrows(
          quarterSlide?.sideBlock,
          'sideBlock not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
