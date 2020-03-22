import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const CreateSlideInput = inputObjectType({
  name: 'CreateSlideInput',
  definition(t) {
    t.string('slideType', {
      required: true,
    });
  },
});

export const createSlide = mutationField('createSlide', {
  type: 'Slide',
  args: {
    input: arg({ type: 'CreateSlideInput', required: true }),
  },
  async resolve(_root, { input: { slideType } }) {
    try {
      switch (slideType) {
        case 'SingleSlide':
          const { singleSlide } = nullthrows(
            await prisma.slide.create({
              data: { singleSlide: { create: {} } },
              include: { singleSlide: true },
            }),
            'Could not create singleSlide',
          );
          return nullthrows(singleSlide, 'singleSlide not loaded');
        case 'HalfSlide':
          const { halfSlide } = nullthrows(
            await prisma.slide.create({
              data: { halfSlide: { create: {} } },
              include: { halfSlide: true },
            }),
            'Could not create halfSlide',
          );
          return nullthrows(halfSlide, 'halfSlide not loaded');
        case 'QuarterSlide':
          const { quarterSlide } = nullthrows(
            await prisma.slide.create({
              data: { quarterSlide: { create: {} } },
              include: { quarterSlide: true },
            }),
            'Could not create quarterSlide',
          );
          return nullthrows(quarterSlide, 'quarterSlide not loaded');
        default:
          throw new Error(`Unimplemented slideType ${slideType}`);
      }
    } catch (e) {
      console.warn(e);
      throw e;
    }
  },
});
