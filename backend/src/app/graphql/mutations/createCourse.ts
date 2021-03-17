import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLEnumType, GraphQLInputObjectType, 
  GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { GradeLevel } from '../../server/objects';
import { Course } from '../../server/objects/courses';
import { Instructor } from '../../server/GraphQLSchema';



export const createCourseInput = new GraphQLInputObjectType({
    name: "createCourseInput",
    fields: () => ({
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        suggestedLevel: { type: GradeLevel},
        instructorId: {type: GraphQLString}
    })
});


export const createOneCourse = {
    type: new GraphQLNonNull(Course),
    args: {
      input: {
        type: new GraphQLNonNull(createCourseInput),
      }
    },
   async resolve(root : any, args : any){
     const { name, description, suggestedLevel, instructorId} = args.input 
    //  const lessonPlan = nullthrows(
    //     await prisma.lessonPlan.create({
    //         data: {}
    //     })
     //)
    const  course = nullthrows(
      await prisma.course.create({
        data: {
            name,
            description,
            suggestedLevel,
            instructorId
        },
        include: {
          instructor: {
            include: {
              user: true
            }
          }
        }
      }),
      'Could not create course',
    );
    console.log(course)
    return course;
   }
  
}

// export const createCourseMutation = {
//     type: CreateCoursePayload,
//     args: {
//         input: {
//             type = new GraphQLNonNull(createCourseInput),
//         }
//     },
//     async resolve(root, args){
//         const{ name, description, suggestedLevel} = args.input
//         const{ course } = nullthrows{
//             await prisma.course.create({
//                 data: {
//                     name,
//                     description,
//                     suggestedLevel
//                 }
//             }),
//             'Could not create Course',
//         };
//         return {course};
//     }
// }
