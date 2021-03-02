import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';
import { TextBlock } from '../../server/GraphQLSchema';
import { UpdateBlockToTBPayload } from '../payloads/UpdateBlockToTBPayload';

export const UpdateBlockToTextBlockInput = new GraphQLInputObjectType({
  name: "UpdateBlockToTextBlockInput",
  fields: () => ({
    blockId: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  })
})

export const updateBlockToTextBlock = {
  type: TextBlock,
  args: {
    input: {
      type: new GraphQLNonNull(UpdateBlockToTextBlockInput)
    }
  },
  async resolve(root, args) {
    const { blockId, title, body } = args.input
    const {
            textBlock,
            multipleChoiceQuestionBlock,
            ...parentBlock
          } = await prisma.block.update({
            where: { id: blockId },
            data: {
              textBlock: {
                create: {
                  title,
                  body,
                },
              },
            },
            include: {
              textBlock: true,
              multipleChoiceQuestionBlock: true,
            },
          });
          if (multipleChoiceQuestionBlock) {
            await prisma.multipleChoiceQuestionBlock.delete({
              where: { id: multipleChoiceQuestionBlock.id },
            });
          }
          console.log("textblock returned", textBlock)
          console.log("parentblock ", parentBlock)
          return {textBlock: nullthrows(textBlock, 'TextBlock not loaded')};
  }
}

// export const UpdateBlockToTextBlockInput = inputObjectType({
//   name: 'UpdateBlockToTextBlockInput',
//   definition(t) {
//     t.string('blockId', { required: true });
//     t.string('title', { required: true });
//     t.string('body', { required: true });
//   },
// });

// export const updateBlockToTextBlock = mutationField('updateBlockToTextBlock', {
//   type: 'TextBlock',
//   args: {
//     input: arg({ type: 'UpdateBlockToTextBlockInput', required: true }),
//   },
//   async resolve(_root, { input: { blockId, title, body } }) {
//     const {
//       textBlock,
//       multipleChoiceQuestionBlock,
//       ...parentBlock
//     } = await prisma.block.update({
//       where: { id: blockId },
//       data: {
//         textBlock: {
//           create: {
//             title,
//             body,
//           },
//         },
//       },
//       include: {
//         textBlock: true,
//         multipleChoiceQuestionBlock: true,
//       },
//     });
//     if (multipleChoiceQuestionBlock) {
//       await prisma.multipleChoiceQuestionBlock.delete({
//         where: { id: multipleChoiceQuestionBlock.id },
//       });
//     }
//     return { ...nullthrows(textBlock, 'TextBlock not loaded'), ...parentBlock };
//   },
// });
