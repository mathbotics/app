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
  GraphQLUnionType,
  FieldsOnCorrectTypeRule,
  GraphQLScalarType
} from 'graphql';
import prisma from '../data/prisma';
import { Mutations } from '../graphql/mutations/Mutations';
import { CourseWhereUniqueInput } from '../graphql/queryinputs/CourseInput';
import { LessonWhereUniqueInput } from '../graphql/queryinputs/LessonInput';

const resolveUserHelper = async (data) => {
  console.log("resolver user", data)
  const admin = await prisma.admin.findFirst({
    where: {
      userId: data.id
    }
  })

  if(admin){
    console.log("is admin", admin)
    return "Admin";
  } 

  const guardian = await prisma.guardian.findFirst({
    where: {
      userId: data.id
    }
  })

  if(guardian){
    console.log("is guardian")
    return "Guardian";
  } 

  const student = await prisma.student.findFirst({
    where: {
      userId: data.id
    }
  })

  if(student){
    console.log("is student")
    return "Student";
  } 

  return "Instructor";
}


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
      password: {          
        type: GraphQLString,
        resolve(user){
          return user.password
        }
      },
    }
  },
  resolveType: resolveUserHelper
});


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
          return Student.username
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(Student){
          console.log(Student)
          return Student.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Student){
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
        type: GraphQLString,
        resolve(Student){
          return Student.password
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
          return Student.guardians
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
      firstName: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.user.lastName
        }
      },
      username: {
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.user.username
        }
      },
      password: {          
        type: GraphQLString,
        resolve(Instructor){
          return Instructor.user.password
        }
      },
      email : {
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
      firstName: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.user.lastName
        }
      },
      username: {
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.user.username
        }
      },
      password: {          
        type: GraphQLString,
        resolve(Guardian){
          return Guardian.user.password
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


export const Admin = new GraphQLObjectType({
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
          return Admin.username
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(Admin){
          return Admin.email
        }
      },
      password: {          
        type: GraphQLString,
        resolve(Admin){
          return Admin.password
        }
      }
    }
  }
});

export const CourseToStudent : any = new GraphQLObjectType({
  name: "CourseToStudent",
  description: "This represents the Course to Student relations",
  fields: () => {
    return {
      course: {
        type: Course,
        resolve(CourseToStudent){
          return CourseToStudent.course
        }
      },
      courseId: {
        type: GraphQLString,
        resolve(CourseToStudent){
          return CourseToStudent.courseId
        }
      },
      student: {
        type: Student,
        resolve(CourseToStudent){
          return CourseToStudent.student
        }
      },
      studentId: {
        type: GraphQLString,
        resolve(CourseToStudent){
          return CourseToStudent.studentId
        }
      },
      grade: {
        type: GraphQLFloat,
        resolve(CourseToStudent){
          return CourseToStudent.grade
        }
      }
    }
  }
})

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
      courseTo: {
        type: new GraphQLList(CourseToStudent),
        resolve(Course){
          return Course.courseTo
        }
      },
      students: {
        type: new GraphQLList(Student),
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

export const Lesson = new GraphQLObjectType({
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
      slides: {
        type: new GraphQLList(Slide),
        resolve(Lesson){
          console.log(Lesson)
          return Lesson.slides
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
        resolve(LessonPlan) {
          return LessonPlan.id
        }
      },
      lessons: {
        type: new GraphQLList(Lesson),
        resolve(LessonPlan){
          return LessonPlan.lessons
        }
      }
    }
  }
});

const MultipleChoiceQuestionChoice = new GraphQLObjectType({
  name: "MultipleChoiceQuestionChoice",
  description: "This represents the MultipleChoiceQuestionChoice",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.id
        }
      },
      text: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.text
        }
      },
      correct: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.correct
        }
      }
    }
  }
});

const MultipleChoiceQuestionResponse = new GraphQLObjectType({
  name: "MultipleChoiceQuestionResponse",
  description: "This represents the MultipleChoiceQuestionResponse",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionResponse) {
          return MultipleChoiceQuestionResponse.id
        }
      },
      choice: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionResponse) {
          return MultipleChoiceQuestionResponse.choice
        }
      },
      student: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.student
        }
      }
    }
  }
});

export const MultipleChoiceQuestionBlock = new GraphQLObjectType({
  name: "MultipleChoiceQuestionBlock",
  description: "This is the multiple choice question block",
  fields: () => {
    return {
      id: {
        type: GraphQLString, 
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.id
        }
      },
      text: {
        type: GraphQLString,
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.text
        }
      },
      choices: {
        type: new GraphQLList(MultipleChoiceQuestionChoice),
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.choices
        }
      },
      responses: {
        type: new GraphQLList(MultipleChoiceQuestionResponse),
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.responses
        }
      }
    }
  }
});

export const TextBlock = new GraphQLObjectType({
  name: "TextBlock",
  description: "This represents the Text Block",
  fields: () => {
    return {
      id: {
        type: GraphQLString, 
        resolve(TextBlock){
          return TextBlock.id
        }
      },
      title: {
        type: GraphQLString, 
        resolve(TextBlock){
          return TextBlock.title
        }
      },
      body: {
        type: GraphQLString, 
        resolve(TextBlock){
          return TextBlock.body
        }
      }
    }
   } 
});

const EmptyBlock = new GraphQLObjectType({
  name: "EmptyBlock",
  description: "This represents the Empty Block",
  fields: () => {
    return {
      id: {
        type: GraphQLString, 
        resolve(EmptyBlock){
          return EmptyBlock.id
        }
      }
    }
   } 
});

const Block = new GraphQLUnionType({
  name: "Block",
  description: "This represents the Block",
  types: [MultipleChoiceQuestionBlock, TextBlock, EmptyBlock],
  resolveType(value){
    if (value.choices){
      return MultipleChoiceQuestionBlock;
    }
    
    //COME BACK IF IT BREAKSSSS
    if (value.body !=null){
      return TextBlock;
    }
    return EmptyBlock;
   } 
});

export const Slide = new GraphQLInterfaceType({
  name: "Slide",
  description: "This represents the Slide",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Slide) {
          return Slide.id
        }
      },
      title: {
        type: GraphQLString,
        resolve(Slide){
          return Slide.title
        }
      }
    }
  },
  resolveType: async (data) => {
    console.log("resolve", data)
    const singleSlide = await prisma.singleSlide.findFirst({
      where: {
        id: data.singleSlideId
      }
    })
    if(singleSlide){
      return "SingleSlide"
    } 
    console.log("return null")
    return null
  }
});

const SingleSlide = new GraphQLObjectType({
  name: "SingleSlide",
  description: "This represents the Single Slide",
  interfaces : [Slide],
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(SingleSlide) {
          return SingleSlide.id
        }
      },
      title: {
        type: GraphQLString,
        resolve(SingleSlide){
          return SingleSlide.title
        }
      },
      block: {
        type: Block,
        resolve(SingleSlide) {
          return SingleSlide.block
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

const Page : any = new GraphQLObjectType({
  name: "Page",
  description: "This represents the Page",
  fields: () => {
    return {
      createdAt: {
        type: GraphQLString, //should be DateTime data type
        resolve(Page){
          return Page.createdAt
        }
      },
      data: {
        type: GraphQLString ,
        resolve(Page){
          return Page.data
        }
      },
      id: {
        type: GraphQLString,
        resolve(Page){
          return Page.id
        }
      },
      content:{
        type: Content,
        resolve(Page){
          return Page.content
        }
      }
    }
  }
});

const Content : any = new GraphQLObjectType({
  name: "Content",
  description: "This represents the Content",
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(Content) {
          return Content.id
        }
      },
      author: {
        type: User,
        resolve(Content){
          return Content.author
        }
      },
      createdAt: {
        type: GraphQLString, //should be DateTime data type
        resolve(Content){
          return Content.createdAt
        }
      },
      title: {
        type: GraphQLString,
        resolve(Content){
          return Content.title
        }
      },
      course:{
        type: GraphQLString,
        resolve(Content){
          return Content.course
        }
      },
      pages:{
        type: new GraphQLList(Page),
        resolve(Cotent){
          return Content.pages
        }
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query',
  fields: {
    viewer: {
      type: User,
      args: {
        id: {
          type: GraphQLID
        }
      },   
      resolve(root, args, context) {
        return context.viewer;
      }
    },
      users: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.user.findMany({where: args});
        }
      },
      admins: {
        type: new GraphQLList(Admin),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          const admins = await prisma.user.findMany({where: args, include: {admin: true}});
          return admins;
        }
      },
      student: {
        type: Student,
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.student.findUnique({
            where: args,
            include: { 
              user: true,
              studentTo: true,
              guardians: true,
            }
        });
        }
      },
      students: {
        type: new GraphQLList(Student),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.user.findMany({
            where: args,
            include: { 
              student: true,
              
            }
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
        async resolve(root, args){
          return await prisma.guardian.findMany({
            where: args,
            include: { 
              user: true,
              students: true,
            }
        });
        }
      },
      instructors: {
        type: new GraphQLList(Instructor),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.instructor.findMany({
            where: args,
            include: { 
              courses: true,
              user: true,
            }
        });
        }
      },
      course: {
        type: Course,
        args: {
          where: {
            type: CourseWhereUniqueInput
          }
        },
        async resolve(root, args){
          const courses = await prisma.course.findUnique({
            where: args, 
            include: { 
              instructors: true,
              lessonPlan: true,
              courseTo: true,
              contents: true
            }
          });
        }
      },
      courses: {
        type: new GraphQLList(Course),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.course.findMany({
            where: args, 
            include: { 
              instructors: true,
              lessonPlan: true,
              courseTo: true,
              contents: true
            }
          });
        }
      },
      lesson: {
        type: Lesson,
        args: {
          where: {
            type: LessonWhereUniqueInput
          }
        },
        async resolve(root, args){
          return await prisma.lesson.findUnique({where: args, include: {slides: true}});
        }
      },
      lessons: {
        type: new GraphQLList(Lesson),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.lesson.findMany({where: args, include: {slides: true}});
        }
      },
      lessonPlans: {
        type: new GraphQLList(LessonPlan),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.lessonPlan.findMany({where: args, include: {lessons: true}});
        }
      },
      courseToStudent: {
        type: new GraphQLList(CourseToStudent),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.courseToStudent.findMany({
            where: args, 
            include: {
              course: true, 
              student: true
            }
          });
        }
      },
      multipleChoiceQuestionChoice: {
        type: new GraphQLList(MultipleChoiceQuestionChoice),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.multipleChoiceQuestionChoice.findMany({where: args});
        }
      },
      multipleChoiceQuestionResponse: {
        type: new GraphQLList(MultipleChoiceQuestionResponse),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.multipleChoiceQuestionResponse.findMany({where: args, include:{student: true}});
        }
      },
      multipleChoiceQuestionBlock: {
        type: new GraphQLList(MultipleChoiceQuestionBlock),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.multipleChoiceQuestionBlock.findMany({
            where: args, 
            include: {
              choices: true, 
              responses: true
            }
          });
        }
      },
      textBlock: {
        type: new GraphQLList(TextBlock),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.textBlock.findMany({where: args});
        }
      },
      block: {
        type: new GraphQLList(Block),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.block.findMany({where: args});
        }
      },
      slides: {
        type: new GraphQLList(Slide),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.slide.findMany({where: args});
        }
      },
      singleSlide: {
        type: new GraphQLList(SingleSlide),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.singleSlide.findMany({where: args, include: {block: true}});
        }
      },
      pages: {
        type: new GraphQLList(Page),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.page.findMany({where: args, include: {content: true}});
        }
      },
      content: {
        type: new GraphQLList(Content),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.content.findMany({where: args, include: {pages: true}});
        }
      },
      singleSlides: {
        type: new GraphQLList(SingleSlide),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          return await prisma.singleSlide.findMany({where: args, include: {block: true}});
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default GraphSchema