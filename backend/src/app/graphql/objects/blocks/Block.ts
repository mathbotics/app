import { unionType } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const Block = unionType({
  name: 'Block',
  definition(t) {
    t.members('MultipleChoiceQuestionBlock', 'TextBlock');
    t.resolveType(async ({ id }) => {
      const { multipleChoiceQuestionBlock, textBlock } = nullthrows(
        await prisma.block.findOne({
          where: { id },
          include: {
            multipleChoiceQuestionBlock: true,
            textBlock: true,
          },
        }),
        'Block not found',
      );
      if (multipleChoiceQuestionBlock) {
        return 'MultipleChoiceQuestionBlock';
      }
      if (textBlock) {
        return 'TextBlock';
      }
      return 'TextBlock';
    });
  },
});
