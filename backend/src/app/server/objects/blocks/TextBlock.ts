import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

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
            if(obj.block)
              return obj.block.id
            
            return obj.id
          }
        },
        title: {
          type: new GraphQLNonNull(GraphQLString), 
          resolve(TextBlock){
            return TextBlock.title
          }
        },
        body: {
          type: new GraphQLNonNull(GraphQLString), 
          resolve(TextBlock){
            return TextBlock.body
          }
        }
      }
     } 
  });
  
  