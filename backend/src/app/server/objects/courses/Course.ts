import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
  } from 'graphql';
import { CourseToLesson, CourseToStudent } from '.';
import { GradeLevel } from '..';
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
        courses: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CourseToLesson))),
          resolve(Course){
            return Course.courses
          }
        }
      
    })
  });
  