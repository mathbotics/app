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

            //handles case where blocks are being resolved
            if(obj.block && obj.block.textBlockId != null)
              return obj.block.id
            
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
            
            return obj.body
          }
        }
      }
     } 
  });
  
  