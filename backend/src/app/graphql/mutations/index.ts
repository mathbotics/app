import { extendType } from 'nexus';
import { Context } from '../context';

export * from './logIn';
export * from './registerUser';
export * from './logout'
export * from './deleteStudents';
export * from './editStudent';
export * from './resetPassword';
export * from './deleteStudents';
export * from './deleteSingleStudent';
export * from './sendInvitationEmail';
export * from './deleteLesson';
export * from './createSlide';
export * from './updateBlockToMultipleChoiceBlock';
export * from './updateBlockToTextBlock';
export * from './answerMultipleChoiceQuestionBlock';
export * from './createStudent';
export * from './sendResetPasswordEmail';

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
    t.crud.deleteOneCourse();
    t.crud.createOneLesson();
    t.crud.updateOneLessonPlan();
    // t.crud.deleteOneLesson();
  },
});
