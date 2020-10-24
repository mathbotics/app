import { mutationField, inputObjectType, arg } from 'nexus';

import prisma from '../../data/prisma';
import SlideHelper from '../objects/slides/helpers/SlideHelper';

export const CreateSlideInput = inputObjectType({
  name: 'CreateSlideInput',
  definition(t) {
    t.string('slideType', {
      required: true,
    });
    t.string('lessonId', {
      required: true,
    });
    t.string('title', {
      required: true,
    });
  },
});

export const createSlide = mutationField('createSlide', {
  type: 'Slide',
  args: {
    input: arg({ type: 'CreateSlideInput', required: true }),
  },
  async resolve(_root, { input: { slideType, title, lessonId } }) {
    try {
      const slide = await SlideHelper.create(slideType, title);
      await prisma.lesson.update({
        where: { id: lessonId },
        data: { slides: { connect: { id: slide.id } } },
      });
      return slide;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  },
});
