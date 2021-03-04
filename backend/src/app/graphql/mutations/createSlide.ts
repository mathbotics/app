import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { resolve } from 'path';
import SlideHelper from '../objects/slides/helpers/SlideHelper';
import { CreateSlidePayload } from '../payloads/CreateSlidePayload';
import prisma from '../../data/prisma';

export const CreateSlideInput = new GraphQLInputObjectType({
  name: "CreateSlideInput",
  fields: () => ({
    slideType: { type: GraphQLString },
    lessonId: { type: GraphQLString },
    title: { type: GraphQLString }
  })
})

export const createSlide = {
  type: CreateSlidePayload,
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
      console.log("return this mutation", slide)
      return {slide: slide};
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  }
}
