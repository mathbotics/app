import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
  } from 'graphql';
import { CourseToLesson, CourseToStudent } from '.';
import { GradeLevel, Lesson } from '..';
import { Instructor, Student } from '../../GraphQLSchema';


  export const Course : any = new GraphQLObjectType({
    name: "Course",
    description: "This represents the Course",
    fields: () => ({
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Course) {
            return Course.id
          }
        },
        name: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Course){
            return Course.name
          }
        },
        description: {
          type: GraphQLString,
          resolve(Course){
            return Course.description
          }
        },
        suggestedLevel: {
          type: new GraphQLNonNull(GradeLevel),
          resolve(Course){
            return Course.suggestedLevel
          }
        },
        instructor: {
          type: new GraphQLNonNull(Instructor),
          resolve(Course){
            return Course.instructor
          }
        },
        courseTo: {
          type: new GraphQLList(CourseToStudent),
          resolve(Course){
            return Course.courseTo
          }
        },
        students: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Student))),
        },
        lessons: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Lesson))),
          resolve(root){
            /* Destructure the CourseToLesson object list that's being returned when querying on a course */
            console.log("here is where the mutation goes to from frontend", root)
            const lessons = root.courses.map((obj:any) => {
              return {...obj.lesson}
            })
            return lessons
          }
        }
      
    })
  });
  
