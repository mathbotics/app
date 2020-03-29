import { interfaceType } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const Slide = interfaceType({
  name: 'Slide',
  definition(t) {
    t.model.id();
    t.model.title();
    t.resolveType(async ({ id }) => {
      const { singleSlide, halfSlide, quarterSlide } = nullthrows(
        await prisma.slide.findOne({
          where: { id },
          include: { singleSlide: true, halfSlide: true, quarterSlide: true },
        }),
        'Slide not found',
      );
      if (singleSlide) {
        return 'SingleSlide';
      }
      if (halfSlide) {
        return 'HalfSlide';
      }
      if (quarterSlide) {
        return 'QuarterSlide';
      }
      throw new Error('Unimplemented slide.');
    });
  },
});
