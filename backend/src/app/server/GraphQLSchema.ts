import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull, 
  GraphQLEnumType,
  GraphQLInterfaceType
} from 'graphql';
import prisma from '../data/prisma';
import { mutation } from '../graphql/mutations';
import { Mutations } from '../graphql/mutations/Mutations';
import { Slide } from '../graphql/objects';
//import { Lesson, Slide } from '../graphql/objects'; 


const User = new GraphQLInterfaceType({
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
      username: {
        type: GraphQLString,
        resolve(user){
          return user.username
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

export const Student = new GraphQLObjectType({
  name: "Student",
  description: "This represents the student",
  interfaces: [User],
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Student){
          return Student.id
        }
      },
      username: {
        type: GraphQLString,
        resolve(Student){
          return Student.user.username
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(Student){
          return Student.user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Student){
          return Student.user.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(Student){
          return Student.user.email
        }
      },
      password: {          
        type: GraphQLString,
        resolve(Student){
          return Student.user.password
        }
      },
      gradeLevel: {
        type: GradeLevel,
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
  },
  isTypeOf: (value, info) => {
    return "gradeLevel" in value
  }
});

// add in istypeof declaration
const Instructor = new GraphQLObjectType({
  name: "Instructor",
  description: "This represents the instructor",
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

// add in istypeof declaration
const Guardian = new GraphQLObjectType({
  name: "Guardian",
  description: "This represents the Guardian",
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

// add in istypeof declaration
const Admin = new GraphQLObjectType({
  name: "Admin",
  description: "This represents the Admin",
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

const Course = new GraphQLObjectType({
  name: "Course",
  description: "This represents the Course",
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

const Lesson = new GraphQLObjectType({
  name: "Lesson",
  description: "This represents the Lesson",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Lesson) {
          return Lesson.id
        }
      },
      title: {
        type: GraphQLString,
        resolve(Lesson){
          return Lesson.title
        }
      },
      slide: {
        type: new GraphQLList(Slide),
        resolve(Lesson){
          return Lesson.slide
        }
      }
    }
  }
});


const LessonPlan = new GraphQLObjectType({
  name: "LessonPlan",
  description: "This represents the LessonPlan",
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


const Slide = new GraphQLObjectType({
  name: "Slide",
  description: "This represents the Slide",
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

export const GradeLevel = new GraphQLEnumType({
  name: "GradeLevel",
  values: {
    FIRST: {value: "FIRST"},
    SECOND: {value: "SECOND"},
    THIRD: {value: "THIRD"},
    FOURTH: {value: "FOURTH"},
    FIFTH: {value: "FIFTH"},
    SIXTH: {value: "SIXTH"},
    SEVENTH: {value: "SEVENTH"},
    EIGHTH: {value: "EIGHTH"},
    NINTH: {value: "NINTH"},
    TENTH: {value: "TENTH"},
    ELEVENTH: {value: "ELEVENTH"},
    TWELFTH: {value: "TWELFTH"}
  }
})


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: {
      users: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return prisma.user.findMany({where: args});
        }
      },
      students: {
        type: new GraphQLList(Student),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return prisma.student.findMany({
            where: args,
            include: { user: true}
        });
        }
      },
      guardians: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return prisma.guardian.findMany({where: args});
        }
      },
      instructors: {
        type: new GraphQLList(Instructor),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return prisma.instructor.findMany({where: args});
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default GraphSchema