import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';
import { UpdateBlockToMultipleChoiceBlockPayload } from '../payloads/UpdateBlockToMultipleChoiceBlockPayload';
import { MultipleChoiceQuestionBlock } from '../../server/GraphQLSchema';

export const ChoiceInput = new GraphQLInputObjectType({
  name: "ChoiceInput",
  fields: () => ({
    text: { type: GraphQLString},
    correct: { type: GraphQLBoolean}
  })
});

export const UpdateBlockToMultipleChoiceBlockInput = new GraphQLInputObjectType({
  name: "UpdateBlockToMultipleChoiceBlockInput",
  fields: () => ({
    blockId: { type: GraphQLString},
    questionText: { type: GraphQLString},
    choices: { type: new GraphQLList(ChoiceInput)},
  })
});

export const updateBlockToMultipleChoiceBlock = {
    type: MultipleChoiceQuestionBlock,
    args: {
      input: {
        type: new GraphQLNonNull(UpdateBlockToMultipleChoiceBlockInput),
      }
    },
   async resolve(root, args){
    const {blockId, questionText, choices} = args.input;
      const { multipleChoiceQuestionBlock, textBlock, ...parentBlock } = await prisma.block.update({
        where: { id: blockId },
        data: {
          multipleChoiceQuestionBlock: {
            create: {
              text: questionText,
              choices: {
                create: choices,
              },
            },
          },
        },
        include: {
          multipleChoiceQuestionBlock: true,
          textBlock: true,
        },
      });

      console.log(multipleChoiceQuestionBlock, "This is what is returned :)")

      if (textBlock) {
        await prisma.textBlock.delete({ where: { id: textBlock.id } });
      }
      return { multipleChoiceQuestionBlock: nullthrows(multipleChoiceQuestionBlock,'MultipleChoiceQuestionBlock not loaded.',
        )
      };
   }
  
}

// import { inputObjectType, mutationField, arg } from 'nexus';
// import nullthrows from 'nullthrows';

// import prisma from '../../data/prisma';

// export const ChoiceInput = inputObjectType({
//   name: 'ChoiceInput',
//   definition(t) {
//     t.string('text', { required: true });
//     t.boolean('correct', { required: true });
//   },
// });

// export const UpdateBlockToMultipleChoiceBlockInput = inputObjectType({
//   name: 'UpdateBlockToMultipleChoiceBlockInput',
//   definition(t) {
//     t.string('blockId', { required: true });
//     t.string('questionText', { required: true });
//     t.list.field('choices', {
//       type: 'ChoiceInput',
//       required: true,
//     });
//   },
// });

// export const updateBlockToMultipleChoiceBlock = mutationField(
//   'updateBlockToMultipleChoiceBlock',
//   {
//     args: {
//       input: arg({
//         type: 'UpdateBlockToMultipleChoiceBlockInput',
//         required: true,
//       }),
//     },
//     type: 'MultipleChoiceQuestionBlock',
//     async resolve(_root, { input: { blockId, choices, questionText } }) {
//       const {
//         multipleChoiceQuestionBlock,
//         textBlock,
//         ...parentBlock
//       } = await prisma.block.update({
//         where: { id: blockId },
//         data: {
//           multipleChoiceQuestionBlock: {
//             create: {
//               text: questionText,
//               choices: {
//                 create: choices,
//               },
//             },
//           },
//         },
//         include: {
//           multipleChoiceQuestionBlock: true,
//           textBlock: true,
//         },
//       });
//       if (textBlock) {
//         await prisma.textBlock.delete({ where: { id: textBlock.id } });
//       }
//       return {
//         ...nullthrows(
//           multipleChoiceQuestionBlock,
//           'MultipleChoiceQuestionBlock not loaded.',
//         ),
//         ...parentBlock,
//       };
//     },
//   },
// );