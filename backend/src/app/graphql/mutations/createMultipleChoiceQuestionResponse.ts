import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { MultipleChoiceQuestionResponse } from "../../server/objects/blocks";

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
  async resolve(root:any, args:any){
    const { blockId, multipleChoiceQuestionChoiceId, studentId } = args.input 

  /*NOTE: current version is student gets rewritten when the response just wants to write his studentId*/
  const block = nullthrows(
    await prisma.block.findUnique({
      where: {
          id: blockId
      },
      include: {
        multipleChoiceQuestionBlock: true
      }
    }),
    'Could not create multipleChoiceQuestionBlockId'
  )
  const multipleChoiceQuestionBlockId = block.multipleChoiceQuestionBlock?.id;
  const createMultipleChoiceQuestionResponse  = nullthrows(
      await prisma.multipleChoiceQuestionResponse.create({
        data: {
          student: {connect: {id: studentId }},
          MultipleChoiceQuestionBlock: {connect: {id: multipleChoiceQuestionBlockId}},
          choice: { connect: { id: multipleChoiceQuestionChoiceId }}
        },
        include: { 
          student: {include: { user : true}},
            choice: true}
      }),
  );
  if(!createMultipleChoiceQuestionResponse.choice.correct){
    return {};
  } else {
    return  createMultipleChoiceQuestionResponse;
  }
  },
}
