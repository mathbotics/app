import { objectType } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const SingleSlide = objectType({
  name: 'SingleSlide',
  definition(t) {
    t.model.id();
    t.field('block', {
      type: 'Block',
      async resolve({ id }) {
        const {
          block: { textBlock, multipleChoiceQuestionBlock },
        } = nullthrows(
          await prisma.singleSlide.findOne({
            where: { id },
            include: {
              block: {
                include: { textBlock: true, multipleChoiceQuestionBlock: true },
              },
            },
          }),
          'SingleSlide not found',
        );
        return nullthrows(
          textBlock ?? multipleChoiceQuestionBlock,
          'No block found.',
        );
      },
    });
  },
});
