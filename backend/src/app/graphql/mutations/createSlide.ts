import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import SlideHelper from '../objects/slides/helpers/SlideHelper';
import prisma from '../../data/prisma';
import { Slide } from '../../server/objects';

export const CreateSlideInput = new GraphQLInputObjectType({
  name: "CreateSlideInput",
  fields: () => ({
    slideType: { type: GraphQLString },
    lessonId: { type: GraphQLString },
    title: { type: GraphQLString }
  })
})

export const createSlide = {
  type: new GraphQLNonNull(Slide),
  args: {
    input: {
      type: new GraphQLNonNull(CreateSlideInput),
    }
  },
  async resolve(root, args) {
    const { slideType, lessonId, title } = args.input;
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
  }
}
