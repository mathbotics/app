import { GraphQLUnionType } from "graphql";
import { EmptyBlock} from "./EmptyBlock";
import { MultipleChoiceQuestionBlock } from "./MultipleChoiceQuestionBlock";
import {TextBlock} from "./TextBlock"



export const Block = new GraphQLUnionType({
    name: "Block",
    description: "This represents the Block",
    types: [MultipleChoiceQuestionBlock, TextBlock, EmptyBlock],
    resolveType(value){

      //case 1: resolve value is a slide object with a block object property
      if((value.block && value.block.multipleChoiceQuestionBlockId != null) 
          || value.multipleChoiceQuestionBlockId != null){
        return "MultipleChoiceQuestionBlock";
      }
      else if((value.block && value.block.textBlockId != null)
              || value.textBlockId != null){
        return "TextBlock";
      }


      if (value.choices){
        return "MultipleChoiceQuestionBlock";
      }
      
      //COME BACK IF IT BREAKSSSS
      if (value.body !=null){
        return "TextBlock";
      }
      return "EmptyBlock";
     } 
  });