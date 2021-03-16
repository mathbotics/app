import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Slide } from ".";

import prisma from "../../data/prisma";
import { Block } from "./blocks";

export const SingleSlide = new GraphQLObjectType({
    name: "SingleSlide",
    description: "This represents the Single Slide",
    interfaces : [Slide],
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(SingleSlide) {
            return SingleSlide.id
          }
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(SingleSlide){
            return SingleSlide.title
          }
        },
        block: {
          type: new GraphQLNonNull(Block),
          async resolve(obj) {
            if(obj.singleSlideId){
              return await prisma.singleSlide.findUnique({
                where: {
                  id: obj.singleSlideId
                },
                include: {
                  block: true
                }
              })
            }
            
            return obj.block
          }
        }
      }
    }
  });