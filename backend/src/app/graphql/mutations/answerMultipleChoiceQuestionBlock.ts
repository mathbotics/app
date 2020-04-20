import { inputObjectType, mutationField, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const AnswerMultipleChoiceQuestionBlockInput = inputObjectType({
  name: 'AnswerMultipleChoiceQuestionBlockInput',
  definition(t) {
    t.string('blockId', { required: true });
    t.string('selectedChoiceId', { required: true });
  },
});

export const answerMultipleChoiceQuestionBlock = mutationField(
  'answerMultipleChoiceQuestionBlock',
  {
    args: {
      input: arg({
        type: 'AnswerMultipleChoiceQuestionBlockInput',
        required: true,
      }),
    },
    type: 'MultipleChoiceQuestionBlock',
    async resolve(
      _root,
      { input: { blockId, selectedChoiceId } },
      { viewer }: any,
    ) {
      const student = await prisma.student.findOne({
        where: { id: viewer.id },
      });
      if (!student) {
        throw new Error('Must be a student');
      }
      const { multipleChoiceQuestionBlock, ...block } = nullthrows(
        await prisma.block.findOne({
          where: { id: blockId },
          include: {
            multipleChoiceQuestionBlock: { include: { choices: true } },
          },
        }),
        'Block not found',
      );
      const responses = (
        await Promise.all(
          nullthrows(
            multipleChoiceQuestionBlock?.choices,
            'MultipleChoiceQuestionBlock not found on block',
          )
            .map(({ id }) => id)
            .map((id) =>
              prisma.multipleChoiceQuestionResponse.findMany({
                where: { choice: { id } },
              }),
            ),
        )
      ).flat();
      if (responses.length !== 0) {
        throw new Error('This question has already been answered.');
      }
      await prisma.multipleChoiceQuestionResponse.create({
        data: {
          choice: { connect: { id: selectedChoiceId } },
          student: { connect: { id: student.id } },
        },
      });
      return { ...multipleChoiceQuestionBlock, ...block };
    },
  },
);
