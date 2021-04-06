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
            //handles case where blocks are being resolved from mcblocks query
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null)
              return obj.block.id
            
            //case when block is being resolved from the blocks query
            if(obj.multipleChoiceQuestionBlockId != null){
              return obj.multipleChoiceQuestionBlockId
            }
            return obj.id
          }
        },
        text: {
          type: new GraphQLNonNull(GraphQLString),
          async resolve(obj){

            //handles case where obj is of type slide containing block property
            //this comes from resolving the blocks in Block object
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null){
              const mcQuestBlock = await prisma.multipleChoiceQuestionBlock.findUnique({
                where: { id: obj.block.multipleChoiceQuestionBlockId }
              })
              return mcQuestBlock?.text
            }
            //handles case when block is being resolved after the blocks query is executed
            if(obj.multipleChoiceQuestionBlock != null){
              return obj.multipleChoiceQuestionBlock.text
            }
            return obj.text
          }
        },
        choices: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MultipleChoiceQuestionChoice))),
          async resolve(obj){

            //handles case where obj is of type slide containing block property
            //comes from resolving blocks
            if(obj.block && obj.block.multipleChoiceQuestionBlockId != null){
              const mcQuestBlock = await prisma.multipleChoiceQuestionBlock.findUnique({
                where: { id: obj.block.multipleChoiceQuestionBlockId },
                include: { choices: true }
              })
              return mcQuestBlock?.choices
            }

            //handles case when block is being resolved after the blocks query is executed
            if(obj.multipleChoiceQuestionBlock != null){
              return obj.multipleChoiceQuestionBlock.choices
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

            //handles case when block is being resolved after the blocks query is executed
            if(obj.multipleChoiceQuestionBlock != null){
              return obj.multipleChoiceQuestionBlock.responses
            }
            return obj.responses
          }
        }
      }
    }
  });