import { ResolveType } from 'apollo-server-express';
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
  GraphQLInterfaceType,
  FieldsOnCorrectTypeRule
} from 'graphql';
import prisma from '../data/prisma';
import { Mutations } from '../graphql/mutations/Mutations';
//import { Slide } from '../graphql/objects';
//import { Lesson, Slide } from '../graphql/objects'; 


export const User : any = new GraphQLInterfaceType({
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
  },
  resolveType: (data) => {
    if(data.gradeLevel) return Student;
    else return Admin;
  }
});

//type Student = ReturnType<typeof User>;

export const Student: any  = new GraphQLObjectType({
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
        type: Guardian,
        resolve(Student){
          return Student.guardian.id
        }
      },
      courses: {
        type: Course,
        resolve(Student){
          return Student.courses
        }
      }
    }
  },
  isTypeOf: (value, info) => {
     return "gradeLevel" in value
  }
});

// add in istypeof declaration
const Instructor : any = new GraphQLObjectType({
  name: "Instructor",
  description: "This represents the instructor",
  interfaces: [User],
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
        type: Course,
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
  interfaces: [User],
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
        type: Student,
        resolve(Guardian){
          return Guardian.students.id
        }
      }
    }
  }
});

// add in istypeof declaration
const Admin = new GraphQLObjectType({
  name: "Admin",
  description: "This represents the Admin",
  interfaces: [User],
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.id
        }
      },
      username: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.user.username
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.user.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.user.email
        }
      },
      password: {          
        type: GraphQLString,
        resolve(Admin){
          return Admin.user.password
        }
      }
    }
  }
});

export const Course = new GraphQLObjectType({
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
        type: GradeLevel,
        resolve(Course){
          return Course.suggestedLevel
        }
      },
      instructors: {
        type: Instructor,
        resolve(Course){
          return Course.instructors
        }
      },
      students: {
        type: Student,
        resolve(Course){
          return Course.students
        }
      },
      lessonPlan: {
        type: LessonPlan,
        resolve(Course){
          return Course.lessonPlan.id
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
      }
    }
  }
});


const Slide : any = new GraphQLObjectType({
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
        type: Instructor,
        resolve(Course){
          return Course.instructors
        }
      },
      students: {
        type: Student,
        resolve(Course){
          return Course.students
        }
      },
      lessonPlan: {
        type: LessonPlan,
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
      guardian: {
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
      },
      courses: {
        type: new GraphQLList(Course),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return prisma.course.findMany({where: args, include: { lessonPlan: true}});
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default GraphSchema