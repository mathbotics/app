// import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
// import { Student, User } from ".";

// export const Guardian = new GraphQLObjectType({
//     name: "Guardian",
//     description: "This represents the Guardian",
//     interfaces: [User],
//     fields: () => {
//       return {
//         id: {
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             return Guardian.id
//           }
//         },
//         username: {
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             if(Guardian.user){
//               return Guardian.user.username
//             }
//             return Guardian.user.username
//           }
//         },
//         firstName: {
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             if(Guardian.user){
//               return Guardian.user.firstName
//             }
//             return Guardian.firstName;
//           }
//         },
//         lastName: {
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             if(Guardian.user){
//               return Guardian.user.lastName
//             }
//             return Guardian.lastName
//           }
//         },
//         email: {
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             return Guardian.email
//           }
//         },
//         password: {          
//           type: new GraphQLNonNull(GraphQLString),
//           resolve(Guardian){
//             if(Guardian.user){
//               return Guardian.user.password
//             }
//             return Guardian.user.password
//           }
//         },
//         students: {
//           type: new GraphQLNonNull(Student),
//           resolve(Guardian){
//             return Guardian.students.id
//           }
//         }
//       }
//     }
//   });