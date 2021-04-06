import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UpdateCoursePayload } from '../payloads/UpdateCoursePayload';
import { GradeLevel } from '../../server/objects';

export const CourseUpdateInput = new GraphQLInputObjectType({
  name: "CourseUpdateInput",
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    description: { type: GraphQLString},
    suggestedLevel: { type: GradeLevel}
  })
});

export const updateOneCourse = {
    type: UpdateCoursePayload,
    args: {
      input: {
        type: new GraphQLNonNull(CourseUpdateInput),
      }
    },
   async resolve(root, args){
    const {id, name, description, suggestedLevel} = args.input 

    const course = nullthrows(
        await prisma.course.update({
          where: {
            id: id
          },
          data: {
            name: name, 
            description: description, 
            suggestedLevel: suggestedLevel
          },
          include: { 
            instructor: true,
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
        }),
        'Could not update course',
      );
    return { course };
   }
  
}
