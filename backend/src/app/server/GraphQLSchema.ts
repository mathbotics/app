import graphql from 'graphql';
import prisma from '../data/prisma';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;

const Users = new GraphQLObjectType({
  name: "User",
  description: "This represents the user model",
  fields: () => {
    return {
      id: {
        type: GraphQLString, 
        resolve(user){
          return user.id
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(user){
          return user.firstName
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(user){
          return user.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(user){
          return user.email
        }
      },
      password: {          
        type: GraphQLString,
        resolve(user){
          return user.password
        }
      },
    }
  }
});

const Students = new GraphQLObjectType({
  name: "Students",
  description: "This represents the students",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Student){
          return Student.id
        }
      },
      email: {
        type: GraphQLString,
        resolve(Student){
          return Student.email
        }
      },
      gradeLevel: {
        type: GraphQLString,
        resolve(Student){
          return Student.gradeLevel
        }
      },
      guardians: {
        type: GraphQLString,
        resolve(Student){
          return Student.guardians
        }
      },
      courses: {
        type: GraphQLString,
        resolve(Student){
          return Student.courses
        }
      //},
      //authors: {        // user-student relation
      //  type: new GraphQLList(Books),
      //   resolve(author){
      //    return author.getBooks();
      //}
      }
    }
  }
});

const Instructors = new GraphQLObjectType({
  name: "Instructors",
  description: "This represents the instructors",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.id
        }
      },
      email: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.email
        }
      },
      courses: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.courses
        }
      }
    }
  }
});

const Guardians = new GraphQLObjectType({
  name: "Guardians",
  description: "This represents the Guardians",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.id
        }
      },
      email: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.email
        }
      },
      students: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.courses
        }
      }
    }
  }
});

const Admins = new GraphQLObjectType({
  name: "Admins",
  description: "This represents the Admins",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.id
        }
      },
      email: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.email
        }
      }
    }
  }
});

const Courses = new GraphQLObjectType({
  name: "Courses",
  description: "This represents the Courses",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Course) {
          return Course.id
        }
      },
      name: {
        type: GraphQLString,
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
        type: GraphQLString,
        resolve(Course){
          return Course.suggestedLevel
        }
      },
      instructors: {
        type: GraphQLString,
        resolve(Course){
          return Course.instructors
        }
      },
      students: {
        type: GraphQLString,
        resolve(Course){
          return Course.students
        }
      },
      lessonPlan: {
        type: GraphQLString,
        resolve(Course){
          return Course.lessonPlan
        }
      }
    }
  }
});

const LessonPlans = new GraphQLObjectType({
  name: "LessonPlans",
  description: "This represents the LessonPlans",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(lessonPlan) {
          return lessonPlan.id
        }
      },
      lessons: {
        type: GraphQLString,
        resolve(lessonPlan){
          return lessonPlan.lessons
        }
      }
    }
  }
});

// const Items = new GraphQLObjectType({
//   name: "Items",
//   description: "This represents items from the store",
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLID,
//         resolve(item) {
//           return item.id
//         }
//       },
//       name: {
//         type: GraphQLString,
//         resolve(item){
//           return item.name
//         }
//       },
//       type: {
//         type: GraphQLString,
//         resolve(item){
//           return item.type
//         }
//       },
//       sku: {
//         type: GraphQLString,
//         resolve(item){
//           return item.sku
//         }
//       },
//       image: {
//         type: GraphQLString,
//         resolve(item){
//           return item.image
//         }
//       },
//       description: {
//         type: GraphQLString,
//         resolve(item){
//           return item.description
//         }
//       },
//       price: {
//         type: GraphQLFloat,
//         resolve(item){
//           return item.price
//         }
//       },
//       size: {
//         type: GraphQLString,
//         resolve(item){
//           return item.size
//         }
//       },
//       qty: {
//         type: GraphQLInt,
//         resolve(item){
//           return item.qty
//         }
//       },
//       manufacturer: {
//         type: Manufacturers,
//         resolve(item){
//           return item.getManufacturer();
//         }
//       }
//     }
//   }
// });

// const Manufacturers = new GraphQLObjectType({
//   name: "Manufacturers",
//   description: "This represents the manufacturers for the items from the store",
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLID,
//         resolve(manufacturer){
//           return manufacturer.id
//         }
//       },
//       name: {
//         type: GraphQLString,
//         resolve(manufacturer){
//           return manufacturer.name
//         }
//       },
//       bio: {
//         type: GraphQLString,
//         resolve(manufacturer){
//           return manufacturer.bio
//         }
//       },
//       items: {
//         type: new GraphQLList(Items),
//         resolve(manufacturer){
//           return manufacturer.getItems();
//         }
//       }
//     }
//   }
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQuery',
//   description: 'This is the root query',
//   fields: {
//       books: {
//         type: new GraphQLList(Books),
//         args: {
//           id: {
//             type: GraphQLID
//           },
//           title: {
//             type: GraphQLString
//           }
//         },
//         resolve(root, args){
//           return prisma.course.findMany({where: args});
//         }
//       },
//       authors: {
//         type: new GraphQLList(Authors),
//         args: {
//           id: {
//             type: GraphQLID
//           }
//         },
//         resolve(root, args){
//           return SQLdb.models.authors.findAll({where: args});
//         }
//       },
//       items: {
//         type: new GraphQLList(Items),
//         args: {
//           id: {
//             type: GraphQLID
//           },
//           size: {
//             type: GraphQLString
//           },
//           name: {
//             type: GraphQLString
//           }
//         },
//         resolve(root, args){
//           return SQLdb.models.items.findAll({where: args});
//         }
//       },
//       manufacturers: {
//         type: new GraphQLList(Manufacturers),
//         args: {
//           id: {
//             type: GraphQLID
//           }
//         },
//         resolve(root, args){
//           return SQLdb.models.manufacturers.findAll({where: args});
//         }
//       }
//     }
// });


// const GraphSchema = new GraphQLSchema({
//   query: RootQuery
// });

// module.exports = GraphSchema;