import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const EmptyBlock = new GraphQLObjectType({
    name: "EmptyBlock",
    description: "This represents the Empty Block",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString), 
          resolve(obj){
            console.log("emptyblock id:", obj)
            if(obj.block)
              return obj.block.id
            
            return obj.id
          }

        }
      }
     } 
  });
  