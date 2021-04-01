import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import{CreateMultipleChoiceQuestionResponsePayload} from '../payloads/createMultipleChoiceQuestionResponsePayload';
import { MultipleChoiceQuestionResponse } from "../../server/objects/blocks";
import { MultipleChoiceQuestionBlock } from "../../server/objects/blocks";
import { Block } from "../../server/objects/blocks";
import { resolve } from 'path';

export const createMultipleChoiceQuestionResponseInput = new GraphQLInputObjectType({
    name: "createMultipleChoiceQuestionResponseInput",
    fields: () => ({
        blockId: { type: GraphQLString},
        studentId: { type: GraphQLString},
        multipleChoiceQuestionChoiceId: { type: GraphQLString}
    })
});


export const createResponse = {
    type: MultipleChoiceQuestionResponse,
    args: {
      input: {
        type: new GraphQLNonNull(createMultipleChoiceQuestionResponseInput),
      }
    },
   async resolve(root, args){
     const { blockId, multipleChoiceQuestionChoiceId, studentId } = args.input 

     const student = nullthrows(
        await prisma.student.findUnique({
          where: {
            id: studentId
          }
        }),
        'Could not create student',
      )

    const  block  = nullthrows(
      await prisma.block.findUnique({
        where: {
          id: blockId
        },
        include: {
          multipleChoiceQuestionBlock: true
        }
      }),
  );

  const multipleChoiceQuestionBlockId = block.multipleChoiceQuestionBlock!.id

    const  multipleChoiceQuestionResponse  = nullthrows(
        await prisma.multipleChoiceQuestionResponse.create({
          data: {
            multipleChoiceQuestionBlockId,
            studentId,
            multipleChoiceQuestionChoiceId
            
          }
        }),
    );

        return  multipleChoiceQuestionResponse ;
      },
  }










