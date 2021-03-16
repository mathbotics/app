import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { MultipleChoiceQuestionChoice, MultipleChoiceQuestionResponse } from ".";
import prisma from "../../../data/prisma";


export const MultipleChoiceQuestionBlock = new GraphQLObjectType({
    name: "MultipleChoiceQuestionBlock",
    description: "This is the multiple choice question block",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString), 
          resolve(obj){
            console.log("mcblock!!!!!!", obj)
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null)
              return obj.block.id
            
            return obj.id
          }
        },
        text: {
          type: new GraphQLNonNull(GraphQLString),
          async resolve(obj){
            console.log("text of obj:", obj)

            //handles case where obj is of type slide containing block property
            //this comes from resolving the blocks in Block object
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null){
              const mcQuestBlock = await prisma.multipleChoiceQuestionBlock.findUnique({
                where: { id: obj.block.multipleChoiceQuestionBlockId }
              })
              return mcQuestBlock?.text
            }
            return obj.text
          }
        },
        choices: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MultipleChoiceQuestionChoice))),
          async resolve(obj){
            console.log("mcblock obj:", obj)

            //handles case where obj is of type slide containing block property
            //comes from resolving blocks
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null){
              const mcQuestBlock = await prisma.multipleChoiceQuestionBlock.findUnique({
                where: { id: obj.block.multipleChoiceQuestionBlockId },
                include: { choices: true }
              })
              return mcQuestBlock?.choices
            }
            return obj.choices
          }
        },
        responses: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MultipleChoiceQuestionResponse))),
          async resolve(obj){

            //handles case where obj is of type slide containing block property
            //comes from resolving blocks
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null){
              const mcQuestBlock = await prisma.multipleChoiceQuestionBlock.findUnique({
                where: { id: obj.block.multipleChoiceQuestionBlockId },
                include: { responses: true }
              })
              return mcQuestBlock?.responses
            }
            return obj.responses
          }
        }
      }
    }
  });