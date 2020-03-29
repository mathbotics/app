import { objectType } from 'nexus';
import nullthrows from 'nullthrows';
import prisma from '../../../data/prisma';

export const HalfSlide = objectType({
  name: 'HalfSlide',
  definition(t) {
    t.implements('Slide');
    t.field('firstHalfBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { halfSlide } = nullthrows(
          await prisma.slide.findOne({
            where: { id },
            include: {
              halfSlide: {
                include: {
                  firstHalfBlock: {
                    include: {
                      textBlock: true,
                      multipleChoiceQuestionBlock: true,
                    },
                  },
                },
              },
            },
          }),
          'HalfSlide not found',
        );
        const { multipleChoiceQuestionBlock, textBlock } = nullthrows(
          halfSlide?.firstHalfBlock,
          'Block not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
    t.field('secondHalfBlock', {
      type: 'Block',
      async resolve({ id }) {
        const { halfSlide } = nullthrows(
          await prisma.slide.findOne({
            where: { id },
            include: {
              halfSlide: {
                include: {
                  secondHalfBlock: {
                    include: {
                      textBlock: true,
                      multipleChoiceQuestionBlock: true,
                    },
                  },
                },
              },
            },
          }),
          'HalfSlide not found',
        );
        const { multipleChoiceQuestionBlock, textBlock } = nullthrows(
          halfSlide?.secondHalfBlock,
          'Block not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
