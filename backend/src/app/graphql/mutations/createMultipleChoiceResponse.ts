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
        //blockId: { type: GraphQLString},
        multipleChoiceQuestionBlockId: { type: GraphQLString},
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
     const { multipleChoiceQuestionBlockId, multipleChoiceQuestionChoiceId, studentId } = args.input 

     const student = nullthrows(
        await prisma.student.findUnique({
          where: {
            id: studentId
          }
        }),
        'Could not create student',
      )

    //   const multipleChoiceQuestionChoice = nullthrows(
    //     await prisma.multipleChoiceQuestionChoice.findUnique({
    //       where: {
    //         id: selectedChoiceId
    //       }
    //     }),
    //     'Could not create multipleChoiceQuestionChoice',
    //   )

    const  multipleChoiceQuestionResponse  = nullthrows(
        await prisma.multipleChoiceQuestionResponse.create({
          data: {
            multipleChoiceQuestionBlockId,
            studentId,
            multipleChoiceQuestionChoiceId
            
          }
        }),
    );
    // console.log("this is the choice",multipleChoiceQuestionChoice)
    // console.log("this is the student",student)
    // console.log("this is the block ID:", blockId)
        return  multipleChoiceQuestionResponse ;
      },
  }










