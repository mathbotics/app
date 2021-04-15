import { GraphQLError, GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from "graphql";
import prisma from "../../data/prisma";

const resolveUserHelper = async (data : typeof User) => {

    if(data == false)
    {
      throw new GraphQLError("No user found in resolve for user helper becuase false");
    }
  
    if(data.createdAt == null || data.createdAt == undefined || data.createdAt == false){
      const resolveUser = await prisma.user.findUnique({
        where: { id: data.id },
          include: {
            admin: true,
            guardian: true,
            instructor: true,
            student: true
          },
      })
  
      const { admin, guardian, instructor, student } : any = resolveUser
  
      if(admin)
      {
        return "Admin"
      }
      if(student)
      {
        return "Student"
      }
      if(instructor)
      {
        return "Instructor"
      }
      if(guardian)
      {
        return "Guardian"
      }
      
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
      return "Instructor";
    } 
  
    throw new GraphQLError("No user found in resolve for user helper");
  }
  
export const User : GraphQLInterfaceType = new GraphQLInterfaceType({
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
  