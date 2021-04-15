import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, 
  GraphQLNonNull, GraphQLString } from 'graphql';
import { GradeLevel } from '../../server/objects';
import { Course } from '../../server/objects/courses';

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