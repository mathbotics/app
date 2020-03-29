import { objectType } from 'nexus';

import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export const Lesson = objectType({
  name: 'Lesson',
  definition(t) {
    t.model.id();
    t.model.title();
    t.list.field('slides', {
      type: 'Slide',
      async resolve({ id }) {
        const { slides } = nullthrows(
          await prisma.lesson.findOne({
            where: { id },
            include: {
              slides: {
                include: {
                  singleSlide: true,
                  halfSlide: true,
                  quarterSlide: true,
                },
              },
            },
          }),
          'Lesson not found',
        );
        return slides.map(
          ({ singleSlide, halfSlide, quarterSlide, ...parentSlide }) => ({
            ...nullthrows(
              singleSlide ?? halfSlide ?? quarterSlide,
              'Slide not found',
            ),
            ...parentSlide,
          }),
        );
      },
    });
  },
});
