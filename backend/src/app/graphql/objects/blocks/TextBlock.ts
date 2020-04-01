import { objectType } from 'nexus';
import nullthrows from 'nullthrows';
import prisma from '../../../data/prisma';

export const TextBlock = objectType({
  name: 'TextBlock',
  definition(t) {
    t.string('id');
    t.string('title', {
      nullable: true,
      async resolve({ id }) {
        const { textBlock } = nullthrows(
          await prisma.block.findOne({
            where: { id },
            include: { textBlock: true },
          }),
          'Block not found.',
        );
        return textBlock?.title ?? null;
      },
    });
    t.string('body', {
      nullable: true,
      async resolve({ id }) {
        const { textBlock } = nullthrows(
          await prisma.block.findOne({
            where: { id },
            include: { textBlock: true },
          }),
          'Block not found.',
        );
        return textBlock?.body ?? null;
      },
    });
  },
});
