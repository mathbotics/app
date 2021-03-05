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
  GraphQLScalarType,
  GraphQLBoolean,
  GraphQLError
} from 'graphql';
import prisma from '../data/prisma';
import { Mutations } from '../graphql/mutations/Mutations';
import { CourseWhereUniqueInput } from '../graphql/queryinputs/CourseInput';
import { LessonWhereUniqueInput } from '../graphql/queryinputs/LessonInput';

const resolveUserHelper = async (data : typeof User) => {

  if(data == false)
  {
    throw new GraphQLError("No user found in resolve for user helper");
  }

  const admin = await prisma.admin.findFirst({
    where: {
      userId:{ 
        equals: data.userId,
      },
    },
    include:{
      user:true
    }
  })

  if(admin){
    console.log("is admin", admin)
    return "Admin";
  } 

  const guardian = await prisma.guardian.findFirst({
    where: {
      userId:{ 
        equals: data.userId,
      },
    },
    include:{
      user:true
    }
  })

  if(guardian){
    console.log("is guardian")
    return "Guardian";
  } 

  const student = await prisma.student.findFirst({
    where: {
      userId:{ 
        equals: data.userId,
      },
    },
    include:{
      user:true
    }
  })

  if(student){
    console.log("is student")
    return "Student";
  } 

  const instructor = await prisma.instructor.findFirst({
    where: {
      userId:{ 
        equals: data.userId,
      },
    },
    include:{
      user:true
    }
  })

  if(instructor){
    console.log("is instructor")
    return "Instructor";
  } 

  throw new GraphQLError("No user found in resolve for user helper");
}


export const User : any = new GraphQLInterfaceType({
  name: "User",
  description: "This represents the user model",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString), 
        resolve(user){
          return user.id
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.username
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.firstName
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.lastName
        }
      },
      password: {          
        type: new GraphQLNonNull(GraphQLString),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Student){
          return Student.id
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Student){
          return Student.username
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Student){
          console.log(Student)
          return Student.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Student){
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

const Instructor : any = new GraphQLObjectType({
  name: "Instructor",
  description: "This represents the instructor",
  interfaces: [User],
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.id
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.user.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.user.lastName
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.user.username
        }
      },
      password: {          
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.user.password
        }
      },
      email : {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          return Instructor.email
        }
      },
      courses: {
        type: new GraphQLNonNull(Course),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.id
        }
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.email
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.user.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.user.lastName
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.user.username
        }
      },
      password: {          
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          return Guardian.user.password
        }
      },
      students: {
        type: new GraphQLNonNull(Student),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          return Admin.id
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          return Admin.username
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          return Admin.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          return Admin.lastName
        }
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          return Admin.email
        }
      },
      password: {          
        type: new GraphQLNonNull(GraphQLString),
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
      instructors: {
        type: new GraphQLNonNull(Instructor),
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
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Student))),
        resolve(Course){
          return Course.students
        }
      },
      lessonPlan: {
        type: new GraphQLNonNull(LessonPlan),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Lesson) {
          return Lesson.id
        }
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Lesson){
          return Lesson.title
        }
      },
      slides: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Slide))),
        resolve(Lesson){
          console.log(Lesson)
          return Lesson.slides
        }
      }
    }
  }
});

export const LessonPlan = new GraphQLObjectType({
  name: "LessonPlan",
  description: "This represents the LessonPlan",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(LessonPlan) {
          return LessonPlan.id
        }
      },
      lessons: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Lesson))),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.id
        }
      },
      text: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(MultipleChoiceQuestionChoice) {
          return MultipleChoiceQuestionChoice.text
        }
      },
      correct: {
        type: new GraphQLNonNull(GraphQLBoolean),
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
        type: new GraphQLNonNull(GraphQLString), 
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.id
        }
      },
      text: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.text
        }
      },
      choices: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MultipleChoiceQuestionChoice))),
        resolve(MultipleChoiceQuestionBlock){
          return MultipleChoiceQuestionBlock.choices
        }
      },
      responses: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MultipleChoiceQuestionResponse))),
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
        type: new GraphQLNonNull(GraphQLString), 
        resolve(TextBlock){
          return TextBlock.id
        }
      },
      title: {
        type: new GraphQLNonNull(GraphQLString), 
        resolve(TextBlock){
          return TextBlock.title
        }
      },
      body: {
        type: new GraphQLNonNull(GraphQLString), 
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
        type: new GraphQLNonNull(GraphQLString), 
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Slide) {
          return Slide.id
        }
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(SingleSlide) {
          return SingleSlide.id
        }
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(SingleSlide){
          return SingleSlide.title
        }
      },
      block: {
        type: new GraphQLNonNull(Block),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Content) {
          return Content.id
        }
      },
      author: {
        type: new GraphQLNonNull(GraphQLString),
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
        type: new GraphQLNonNull(GraphQLString),
        resolve(Content){
          return Content.title
        }
      },
      course:{
        type: new GraphQLNonNull(Course),
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
      type: new GraphQLNonNull(User),
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
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Student))),
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
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Course))),
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
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Lesson))),
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
      },
      mcblocks: {
        type: new GraphQLList(MultipleChoiceQuestionBlock),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          const mcblocks = await prisma.multipleChoiceQuestionBlock.findMany({
            where: args, 
            });
          return mcblocks
        }
      },
      blocks: {
        type: new GraphQLList(Block),
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          const blocks = await prisma.block.findMany({
            where: args, 
            });
          return blocks
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default GraphSchema