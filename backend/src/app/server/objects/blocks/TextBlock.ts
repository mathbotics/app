import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import prisma from "../../../data/prisma";

export const TextBlock = new GraphQLObjectType({
    name: "TextBlock",
    description: "This represents the Text Block",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString), 
          resolve(obj){
            console.log("emptyblock id:", obj)

            //handles case where blocks are being resolved from textblocks query
            if(obj.block && obj.block.textBlockId != null)
              return obj.block.id

            //case when block is being resolved from the blocks query
            if(obj.textBlock != null){
              return obj.textBlock.id
            }
            return obj.id
          }
        },
        title: {
          type: new GraphQLNonNull(GraphQLString), 
          async resolve(obj){
            //handles case where blocks are being resolved
            if(obj.block && obj.block.textBlockId != null){
              const textBlock = await prisma.textBlock.findUnique({
                where: { id: obj.block.textBlockId }
              })

              return textBlock?.title
            }

            //case when block is being resolved from the blocks query
            if(obj.textBlock != null){
              return obj.textBlock.title
            }
            
            return obj.title
          }
        },
        body: {
          type: new GraphQLNonNull(GraphQLString), 
          async resolve(obj){
            //handles case where blocks are being resolved
            if(obj.block && obj.block.textBlockId != null){
              const textBlock = await prisma.textBlock.findUnique({
                where: { id: obj.block.textBlockId }
              })

              return textBlock?.body
            }
            
            //case when block is being resolved from the blocks query
            if(obj.textBlock != null){
              return obj.textBlock.body
            }

            return obj.body
          }
        }
      }
     } 
  });
  
  