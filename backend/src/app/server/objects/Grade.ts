import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Lesson } from "./Lesson";
//import { Course, Student, Lesson  } from "."



export const Grade: any  = new GraphQLObjectType({
    name: "Grade",
    description: "This represents the grade",
    fields: () => {
      return {
        courseId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Grade){
            return Grade.courseId
          }
        },
        studentId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Grade){
            return Grade.studentId
          }
        },
        lessonId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Grade){
            return Grade.lessonId
          }
        },
        lesson: {
          type: new GraphQLNonNull(Lesson),
          resolve(root){
            return root.lesson
          }
        },
        grade: {
          type: new GraphQLNonNull(GraphQLFloat),
          resolve(Grade){
            return Grade.grade
          }
        }  
      }
    }
  });