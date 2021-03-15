import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Course, User } from ".";

export const Instructor = new GraphQLObjectType({
    name: "Instructor",
    description: "This represents the Instructor",
    interfaces: [User],
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        username: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Instructor){
            if(Instructor.user){
              return Instructor.user.username
            }
            return Instructor.username
          }
        },
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Instructor){
            console.log("Inside instructor resolve", Instructor)
            if(Instructor.user){
              return Instructor.user.firstName
            }
            return Instructor.firstName;
          }
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Instructor){
            if(Instructor.user){
              return Instructor.user.lastName
            }
            return Instructor.lastName
          }
        },
        email : {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Instructor){
            return Instructor.email
          }
        },
        password: {          
          type: new GraphQLNonNull(GraphQLString),
          resolve(Instructor){
            if(Instructor.user){
              return Instructor.user.password
            }
            return Instructor.user.password
          }
        },
        courses: {
          type: new GraphQLNonNull(Course),
          resolve(Instructor){
            return Instructor.courses
          }
        }
      })
  })
