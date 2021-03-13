import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { CourseToStudent, GradeLevel, Guardian, User  } from "."

export const Student: any  = new GraphQLObjectType({
    name: "Student",
    description: "This represents the student",
    interfaces: [User],
    fields: () => {
      return {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Student){
            return Student.id
          }
        },
        username: {
          type: new GraphQLNonNull(GraphQLString),
          resolve(Student){
            if(Student.user){
              return Student.user.username
            }
            return Student.username
          }
        },
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
          async resolve(Student){
            console.log("Inside student resolve", Student)
            if(Student.user){
              return Student.user.firstName
            }
            return Student.firstName
          }
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
          async resolve(Student){
            console.log("Inside student resolve", Student)
            if(Student.user){
              return Student.user.lastName
            }
            return Student.lastName          
          }
        },
        // email: {
        //   type: GraphQLString,
        //   resolve(Student){
        //     return Student.user.email
        //   }
        // },
        password: {          
          type: new GraphQLNonNull(GraphQLString),
          resolve(Student){
            if(Student.user){
              return Student.user.password
            }
            return Student.password
          }
        },
        gradeLevel: {
          type: new GraphQLNonNull(GradeLevel),
          resolve(Student){
            return Student.gradeLevel
          }
        },
        guardians: {
          type: new GraphQLNonNull(Guardian),
          resolve(Student){
            return Student.guardian.id
          }
        },
        studentTo: {
          type: new GraphQLList(CourseToStudent),
          resolve(Student){
            console.log(Student)
            return Student.studentTo
          }
        }
      }
    }
  });