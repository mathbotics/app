import { extendType } from 'nexus';
import { Context } from '../context';

export * from './logIn';
export * from './registerUser';
export * from './sendInvitationEmail';
export * from './createSlide';
export * from './updateBlockToMultipleChoiceBlock';
export * from './updateBlockToTextBlock';
export * from './answerMultipleChoiceQuestionBlock';

export const mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCourse({
      computedInputs: {
        instructors({ ctx }) {
          const { id } = (ctx as Context).viewer;
          return {
            connect: {
              id,
            },
          };
        },
      },
    });
    t.crud.updateOneCourse();
    t.crud.createOneLesson();
  },
});
