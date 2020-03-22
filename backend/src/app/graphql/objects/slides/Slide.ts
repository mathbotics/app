import { unionType } from 'nexus';
import prisma from '../../../data/prisma';

export const Slide = unionType({
  name: 'Slide',
  definition(t) {
    t.members('SingleSlide', 'HalfSlide', 'QuarterSlide');
    t.resolveType(async ({ id }) => {
      const [singleSlide, halfSlide, quarterSlide] = await Promise.all([
        prisma.singleSlide.findOne({ where: { id } }),
        prisma.halfSlide.findOne({ where: { id } }),
        prisma.quarterSlide.findOne({ where: { id } }),
      ]);
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
