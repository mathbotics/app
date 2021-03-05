import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GradeLevel } from '../../server/GraphQLSchema';
import {CreateCoursePayload} from '../payloads/CreateCoursePayload';
import { resolve } from 'path';


export const createCourseInput = new GraphQLInputObjectType({
    name: "createCourseInput",
    fields: () => ({
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        suggestedLevel: { type: GradeLevel}
    })
});

export const createOneCourse = {
    type: CreateCoursePayload,
    args: {
      input: {
        type: new GraphQLNonNull(createCourseInput),
      }
    },
   async resolve(root, args){
     const { name, description, suggestedLevel} = args.input 
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
            // lessonPlan: { 
            //     connect: { 
            //         id: lessonPlan.id 
            //     } 
            // }
        }
      }),
      'Could not create course',
    );
    return {course};
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
