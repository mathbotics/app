import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
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
        grade: {
          type: new GraphQLNonNull(GraphQLFloat),
          resolve(Grade){
            return Grade.grade
          }
        }  
      }
    }
  });