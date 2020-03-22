import { unionType } from 'nexus';
import prisma from '../../../data/prisma';

export const Block = unionType({
  name: 'Block',
  definition(t) {
    t.members('MultipleChoiceQuestionBlock', 'TextBlock');
    t.resolveType(async ({ id }) => {
      const [multipleChoiceQuestionBlock, textBlock] = await Promise.all([
        prisma.multipleChoiceQuestionBlock.findOne({ where: { id } }),
        prisma.textBlock.findOne({ where: { id } }),
      ]);
      if (multipleChoiceQuestionBlock) {
        return 'MultipleChoiceQuestionBlock';
      }
      if (textBlock) {
        return 'TextBlock';
      }
      throw new Error('Unimplemented block.');
    });
  },
});
