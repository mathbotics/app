import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"
import { Course, Lesson } from "."

export const CourseToLesson : any = new GraphQLObjectType({
    name: "CourseToLesson",
    description: "This represents the course to lesson relation",
    fields: () => {
      return {
        courseId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(CourseToLesson){
            return CourseToLesson.courseId
          }
        },
        lessonId: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(CourseToLesson){
            return CourseToLesson.lessonId
          }
        },
        course: {
          type: new GraphQLNonNull(Course),
          resolve(root){
            return root.course
          }
        },
        lesson: {
          type: new GraphQLNonNull(Lesson),
          resolve(root){
            return root.lesson
          }
        }
      }
    }
    })