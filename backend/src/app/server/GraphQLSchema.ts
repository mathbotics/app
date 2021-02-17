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
import { Lesson, Slide } from '../graphql/objects'; 


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

// add in istypeof declaration
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
  },
  isTypeOf: (value) => value instanceof Student
});

// add in istypeof declaration
const Instructors = new GraphQLObjectType({
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
const Guardians = new GraphQLObjectType({
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
const Admins = new GraphQLObjectType({
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

const Courses = new GraphQLObjectType({
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

const Lessons = new GraphQLObjectType({
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
        type: new GraphQLList(Lesson),
        resolve(Lesson){
          return Lesson.slide
        }
      }
    }
  }
});


const LessonPlans = new GraphQLObjectType({
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


const Slides = new GraphQLObjectType({
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
    FIRST: {value: 1},
    SECOND: {value: 2},
    THIRD: {value: 3},
    FOURTH: {value: 4},
    FIFTH: {value: 5},
    SIXTH: {value: 6},
    SEVENTH: {value: 7},
    EIGHTH: {value: 8},
    NINTH: {value: 9},
    TENTH: {value: 10},
    ELEVENTH: {value: 11},
    TWELFTH: {value: 12}
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
          return prisma.course.findMany({where: args});
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
          return prisma.student.findMany({where: args});
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
        type: new GraphQLList(Instructors),
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