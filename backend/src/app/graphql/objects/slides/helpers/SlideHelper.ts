import nullthrows from 'nullthrows';
import prisma from '../../../../data/prisma';

export default {
  async create(type: string, title: string) {
    switch (type) {
      case 'SingleSlide':
        const { singleSlide, ...singleSlideParent } = nullthrows(
          await prisma.slide.create({
            data: {
              title,
              singleSlide: {
                create: {
                  block: {
                    create: {},
                  },
                },
              },
            },
            include: { singleSlide: true },
          }),
          'Could not create singleSlide',
        );
        console.log(singleSlide)
        console.log(singleSlideParent)
        return {
          ...nullthrows(singleSlide, 'singleSlide not loaded'),
          ...singleSlideParent,
        };
      // case 'HalfSlide':
      //   const { halfSlide, ...halfSlideParent } = nullthrows(
      //     await prisma.slide.create({
      //       data: {
      //         title,
      //         halfSlide: {
      //           create: {
      //             firstHalfBlock: {
      //               create: {},
      //             },
      //             secondHalfBlock: {
      //               create: {},
      //             },
      //           },
      //         },
      //       },
      //       include: { halfSlide: true },
      //     }),
      //     'Could not create halfSlide',
      //   );
      //   return {
      //     ...nullthrows(halfSlide, 'halfSlide not loaded'),
      //     ...halfSlideParent,
      //   };
      // case 'QuarterSlide':
      //   const { quarterSlide, ...quarterSlideParent } = nullthrows(
      //     await prisma.slide.create({
      //       data: {
      //         title,
      //         quarterSlide: {
      //           create: {
      //             mainBlock: {
      //               create: {},
      //             },
      //             sideBlock: {
      //               create: {},
      //             },
      //           },
      //         },
      //       },
      //       include: { quarterSlide: true },
      //     }),
      //     'Could not create quarterSlide',
      //   );
      //   return {
      //     ...nullthrows(quarterSlide, 'quarterSlide not loaded'),
      //     ...quarterSlideParent,
      //   };
      default:
        throw new Error(`Unimplemented slideType ${type}`);
    }
  },
};
