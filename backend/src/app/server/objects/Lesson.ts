import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Slide } from "./Slide";

export const Lesson = new GraphQLObjectType({
    name: "Lesson",
    description: "This represents the Lesson",
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Lesson) {
            return Lesson.id
          }
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Lesson){
            return Lesson.title
          }
        },
        slides: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Slide))),
          resolve(Lesson){
            console.log(Lesson)
            return Lesson.slides
          }
        },
        time: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Lesson) {
            return Lesson.time
          }
        },
        difficultyLevel: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Lesson) {
            return Lesson.difficultyLevel
          }
        }
        
      }
    }
  });