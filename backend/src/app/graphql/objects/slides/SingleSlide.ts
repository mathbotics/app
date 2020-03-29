import { objectType } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const SingleSlide = objectType({
  name: 'SingleSlide',
  definition(t) {
    t.implements('Slide');
    t.field('block', {
      type: 'Block',
      async resolve({ id }) {
        const { singleSlide } = nullthrows(
          await prisma.slide.findOne({
            where: { id },
            include: {
              singleSlide: {
                include: {
                  block: {
                    include: {
                      textBlock: true,
                      multipleChoiceQuestionBlock: true,
                    },
                  },
                },
              },
            },
          }),
          'SingleSlide not found',
        );
        const { textBlock, multipleChoiceQuestionBlock } = nullthrows(
          singleSlide?.block,
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
