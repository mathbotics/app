import nullthrows from 'nullthrows';
import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UpdateCoursePayload } from '../payloads/UpdateCoursePayload';
import { Course, GradeLevel } from '../../server/GraphQLSchema';

export const CourseUpdateInput = new GraphQLInputObjectType({
  name: "CourseUpdateInput",
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    description: { type: GraphQLString},
    suggestedLevel: { type: GradeLevel},
    lessonPlanId: { type: GraphQLString},
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
    const {id, name, description, suggestedLevel, lessonPlanId} = args.input 

    const course = nullthrows(
        await prisma.course.update({
          where: {
            id: id
          },
          data: {
            name: name, 
            description: description, 
            suggestedLevel: suggestedLevel, 
            lessonPlanId: lessonPlanId
          },
        }),
        'Could not update course',
      );
    return { course };
   }
  
}
