import { extendType } from 'nexus';

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
    t.crud.createOneCourse();
    t.crud.updateOneCourse();
    t.crud.createOneLesson();
  },
});
