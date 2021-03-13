import { GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from "graphql";
import prisma from "../../data/prisma";

export const Slide = new GraphQLInterfaceType({
    name: "Slide",
    description: "This represents the Slide",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Slide) {
            return Slide.id
          }
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Slide){
            return Slide.title
          }
        }
      }
    },
    resolveType: async (data) => {
      console.log("resolve", data)
      const singleSlide = await prisma.singleSlide.findFirst({
        where: {
          id: data.singleSlideId
        }
      })
      if(singleSlide){
        return "SingleSlide"
      } 
      console.log("return null")
      return null
    }
  });