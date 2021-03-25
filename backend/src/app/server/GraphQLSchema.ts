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
import { GradeLevel, Lesson, SingleSlide, Slide,  User } from './objects';
import { Block, MultipleChoiceQuestionBlock, MultipleChoiceQuestionChoice, MultipleChoiceQuestionResponse, TextBlock } from './objects/blocks';
import { Course, CourseToStudent } from './objects/courses';
import { Grade } from './objects/Grade';

// const resolveUserHelper = async (data : typeof User) => {

//   if(data == false)
//   {
//     throw new GraphQLError("No user found in resolve for user helper becuase false");
//   }

//   if(data.createdAt == null || data.createdAt == undefined || data.createdAt == false){
//     const resolveUser = await prisma.user.findUnique({
//       where: { id: data.id },
//         include: {
//           admin: true,
//           guardian: true,
//           instructor: true,
//           student: true
//         },
//     })

//     const { admin, guardian, instructor, student } : any = resolveUser

//     if(admin)
//     {
//       return "Admin"
//     }
//     if(student)
//     {
//       return "Student"
//     }
//     if(instructor)
//     {
//       return "Instructor"
//     }
//     if(guardian)
//     {
//       return "Guardian"
//     }
    
//   }


//   const admin = await prisma.admin.findFirst({
//     where: {
//       userId:{ 
//         equals: data.userId,
//       },
//     },
//     include:{
//       user:true
//     }
//   })

//   if(admin){
//     console.log("Resolve user chose admin", admin)
//     return "Admin";
//   } 

//   const guardian = await prisma.guardian.findFirst({
//     where: {
//       userId:{ 
//         equals: data.userId,
//       },
//     },
//     include:{
//       user:true
//     }
//   })

//   if(guardian){
//     console.log("Resolve user chose guardian", guardian)
//     return "Guardian";
//   } 

//   const student = await prisma.student.findFirst({
//     where: {
//       userId:{ 
//         equals: data.userId,
//       },
//     },
//     include:{
//       user:true
//     }
//   })

//   if(student){
//     console.log("Resolve user chose student", student)
//     return "Student";
//   } 

//   const instructor = await prisma.instructor.findFirst({
//     where: {
//       userId:{ 
//         equals: data.userId,
//       },
//     },
//     include:{
//       user:true
//     }
//   })

//   if(instructor){
//     console.log("Resolve user chose instructor", instructor)
//     return "Instructor";
//   } 

//   throw new GraphQLError("No user found in resolve for user helper");
// }


// export const User : any = new GraphQLInterfaceType({
//   name: "User",
//   description: "This represents the user model",
//   fields: () => {
//     return {
//       id: {
//         type: new GraphQLNonNull(GraphQLString), 
//         resolve(user){
//           return user.id
//         }
//       },
//       username: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(user){
//           return user.username
//         }
//       },
//       firstName: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(user){
//           return user.firstName
//         }
//       },
//       lastName: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(user){
//           return user.lastName
//         }
//       },
//       password: {          
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(user){
//           return user.password
//         }
//       },
//     }
//   },
//   resolveType: resolveUserHelper
// });

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

export const Instructor : any = new GraphQLObjectType({
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
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Instructor){
          if(Instructor.user){
            return Instructor.user.username
          }
          return Instructor.username
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

export const Guardian = new GraphQLObjectType({
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
          if(Guardian.user){
            return Guardian.user.firstName
          }
          return Guardian.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          if(Guardian.user){
            return Guardian.user.lastName
          }
          return Guardian.lastName
        }
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          if(Guardian.user){
            return Guardian.user.username
          }
          return Guardian.user.username
        }
      },
      password: {          
        type: new GraphQLNonNull(GraphQLString),
        resolve(Guardian){
          if(Guardian.user){
            return Guardian.user.password
          }
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
          if(Admin.user){
            return Admin.user.username
          }
          return Admin.username
        }
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          console.log("Inside admin resolve", Admin)
          if(Admin.user){
            return Admin.user.firstName
          }
          return Admin.firstName;
        }
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(Admin){
          if(Admin.user){
            return Admin.user.lastName
          }
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
          if(Admin.user){
            return Admin.user.password
          }
          return Admin.password
        }
      }
    }
  }
});

// export const CourseToStudent : any = new GraphQLObjectType({
//   name: "CourseToStudent",
//   description: "This represents the Course to Student relations",
//   fields: () => {
//     return {
//       course: {
//         type: Course,
//         resolve(CourseToStudent){
//           return CourseToStudent.course
//         }
//       },
//       courseId: {
//         type: GraphQLString,
//         resolve(CourseToStudent){
//           return CourseToStudent.courseId
//         }
//       },
//       student: {
//         type: Student,
//         resolve(CourseToStudent){
//           return CourseToStudent.student
//         }
//       },
//       studentId: {
//         type: GraphQLString,
//         resolve(CourseToStudent){
//           return CourseToStudent.studentId
//         }
//       },
//       grade: {
//         type: GraphQLFloat,
//         resolve(CourseToStudent){
//           return CourseToStudent.grade
//         }
//       }
//     }
//   }
// })

// export const Course = new GraphQLObjectType({
//   name: "Course",
//   description: "This represents the Course",
//   fields: () => ({
//       id: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Course) {
//           return Course.id
//         }
//       },
//       name: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Course){
//           return Course.name
//         }
//       },
//       description: {
//         type: GraphQLString,
//         resolve(Course){
//           return Course.description
//         }
//       },
//       suggestedLevel: {
//         type: new GraphQLNonNull(GradeLevel),
//         resolve(Course){
//           return Course.suggestedLevel
//         }
//       },
//       instructor: {
//         type: new GraphQLNonNull(Instructor),
//         resolve(Course){
//           return Course.instructor
//         }
//       },
//       courseTo: {
//         type: new GraphQLList(CourseToStudent),
//         resolve(Course){
//           return Course.courseTo
//         }
//       },
//       students: {
//         type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Student))),
//       },
//       courses: {
//         type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CourseToLesson))),
//         resolve(Course){
//           return Course.courses
//         }
//       }
    
//   })
// });

// export const CourseToLesson = new GraphQLObjectType({
// name: "CourseToLesson",
// description: "This represents the course to lesson relation",
// fields: () => {
//   return {
//     courseId: {
//       type: new GraphQLNonNull(GraphQLString),
//       resolve(CourseToLesson){
//         return CourseToLesson.courseId
//       }
//     },
//     lessonId: {
//       type: new GraphQLNonNull(GraphQLString),
//       resolve(CourseToLesson){
//         return CourseToLesson.lessonId
//       }
//     },
//     course: {
//       type: new GraphQLNonNull(Course),
//       resolve(CourseToLesson){
//         return CourseToLesson.course
//       }
//     },
//     lesson: {
//       type: new GraphQLNonNull(Lesson),
//       resolve(CourseToLesson){
//         return CourseToLesson.lesson
//       }
//     }
//   }
// }
// })

// export const Lesson = new GraphQLObjectType({
//   name: "Lesson",
//   description: "This represents the Lesson",
//   fields: () => {
//     return {
//       id: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Lesson) {
//           return Lesson.id
//         }
//       },
//       title: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Lesson){
//           return Lesson.title
//         }
//       },
//       slides: {
//         type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Slide))),
//         resolve(Lesson){
//           console.log(Lesson)
//           return Lesson.slides
//         }
//       }
//     }
//   }
// });

// export const LessonPlan = new GraphQLObjectType({
//   name: "LessonPlan",
//   description: "This represents the LessonPlan",
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLString,
//         resolve(LessonPlan) {
//           return LessonPlan.id
//         }
//       }
//     }
//   }
// });










// export const Slide = new GraphQLInterfaceType({
//   name: "Slide",
//   description: "This represents the Slide",
//   fields: () => {
//     return {
//       id: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Slide) {
//           return Slide.id
//         }
//       },
//       title: {
//         type: new GraphQLNonNull(GraphQLString),
//         resolve(Slide){
//           return Slide.title
//         }
//       }
//     }
//   },
//   resolveType: async (data) => {
//     console.log("resolve", data)
//     const singleSlide = await prisma.singleSlide.findFirst({
//       where: {
//         id: data.singleSlideId
//       }
//     })
//     if(singleSlide){
//       return "SingleSlide"
//     } 
//     console.log("return null")
//     return null
//   }
// });



// export const GradeLevel = new GraphQLEnumType({
//   name: "GradeLevel",
//   values: {
//     FIRST: {value: "FIRST"},
//     SECOND: {value: "SECOND"},
//     THIRD: {value: "THIRD"},
//     FOURTH: {value: "FOURTH"},
//     FIFTH: {value: "FIFTH"},
//     SIXTH: {value: "SIXTH"},
//     SEVENTH: {value: "SEVENTH"},
//     EIGHTH: {value: "EIGHTH"},
//     NINTH: {value: "NINTH"},
//     TENTH: {value: "TENTH"},
//     ELEVENTH: {value: "ELEVENTH"},
//     TWELFTH: {value: "TWELFTH"}
//   }
// })

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
        console.log("In viewer root resolve (args)", args)
        console.log("In viewer root resolve (viewer)", context.viewer)
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
          console.log(await prisma.user.findMany({where: args}))
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
          const admins = await prisma.admin.findMany({where: args, include: {user: true}});
          console.log(admins)
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
          const students = await prisma.student.findMany({
            where: args,
            include: { 
              user: true,
              
            }
        });
        console.log(students)
          return await prisma.student.findMany({
            where: args,
            include: { 
              user: true,
              
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
      courseToLessons: {
        type: new GraphQLList(Lesson),
        args: {
          id: {
            type: GraphQLID,
          }
        },
        async resolve(root, args){
          const coursetolessons = await prisma.courseToLesson.findMany({
            where: {
              courseId: args.id
            },
            include: {
              lesson: {
                include: {
                  slides: true
                }
              }
            }
          });
          
          const lessons = coursetolessons.map(coursetolesson => {
              return {...coursetolesson.lesson}
          })

          console.log(lessons)
          return lessons
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
          const id = args.where.id
          const course = await prisma.course.findUnique({
            where: {
              id: id
            }, 
            include: { 
              instructor: true,
              //lessonPlan: true,
              courseTo: {
                include: {
                  student: {
                  include: {
                    user: true
                  }
                  }
                }
              },
              contents: true,
              courses: {
                include: {
                  lesson: {
                    include: {
                      slides: true
                    }
                  }
                }
              }
            }
          });

          

          console.log("editing specified course:",course)
          return course
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
          const courses = await prisma.course.findMany({
            where: args, 
            include: { 
              //lessonPlan: true,
              courseTo: {
                include: {
                  student: true,
                }
              },
              contents: true,
              instructor: true,
            }
          });
          console.log(courses)
          return courses ?? []
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
          console.log(args)
          const id = args.where.id
          return await prisma.lesson.findUnique({
            where: {
              id: id,
            }, 
            include: {
              slides: true
              
            }
          });
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
      // lessonPlans: {
      //   type: new GraphQLList(LessonPlan),
      //   args: {
      //     id: {
      //       type: GraphQLID
      //     }
      //   },
      //   async resolve(root, args){
      //     return await prisma.lessonPlan.findMany({where: args, include: {lessons: true}});
      //   }
      // },
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
          console.log("slides:", args)
          const slides = await prisma.slide.findMany({where: args})
          console.log("slides to return!!!!!!!!!!1", slides)
          return slides
        }
      },
      singleSlide: {
        type: SingleSlide,
        args: {
          id: {
            type: GraphQLID
          }
        },
        async resolve(root, args){
          console.log("singleslide:", args)
          return await prisma.singleSlide.findFirst({where: args, include: {block: true}});
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
      },
      grades: {
        type: new GraphQLList(Grade),
        args: {
          id: {
            type: GraphQLString
          }
        },
        async resolve(root, args){
          const grades = await prisma.grade.findMany({
            where: args, 
            });
            console.log("this is what a grade is", grades)
          return grades
        }
      }
    }
});


export const GraphSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});