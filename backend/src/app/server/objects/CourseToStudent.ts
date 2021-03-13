import { GraphQLFloat, GraphQLObjectType, GraphQLString } from "graphql"
import { Course, Student as Student } from "."


export const CourseToStudent : any = new GraphQLObjectType({
    name: "CourseToStudent",
    description: "This represents the Course to Student relations",
    fields: () => {
      return {
        course: {
          type: Course,
          resolve(CourseToStudent){
            return CourseToStudent.course
          }
        },
        courseId: {
          type: GraphQLString,
          resolve(CourseToStudent){
            return CourseToStudent.courseId
          }
        },
        student: {
          type: Student,
          resolve(CourseToStudent){
            return CourseToStudent.student
          }
        },
        studentId: {
          type: GraphQLString,
          resolve(CourseToStudent){
            return CourseToStudent.studentId
          }
        },
        grade: {
          type: GraphQLFloat,
          resolve(CourseToStudent){
            return CourseToStudent.grade
          }
        }
      }
    }
  })