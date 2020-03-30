import { inputObjectType, mutationField, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const UpdateBlockToTextBlockInput = inputObjectType({
  name: 'UpdateBlockToTextBlockInput',
  definition(t) {
    t.string('blockId', { required: true });
    t.string('title', { required: true });
    t.string('body', { required: true });
  },
});

export const updateBlockToTextBlock = mutationField('updateBlockToTextBlock', {
  type: 'TextBlock',
  args: {
    input: arg({ type: 'UpdateBlockToTextBlockInput', required: true }),
  },
  async resolve(_root, { input: { blockId, title, body } }) {
    const { textBlock, ...parentBlock } = await prisma.block.update({
      where: { id: blockId },
      data: {
        textBlock: {
          create: {
            title,
            body,
          },
        },
        multipleChoiceQuestionBlock: {
          delete: true,
        },
      },
      include: {
        textBlock: true,
      },
    });
    return { ...nullthrows(textBlock, 'TextBlock not loaded'), ...parentBlock };
  },
});
