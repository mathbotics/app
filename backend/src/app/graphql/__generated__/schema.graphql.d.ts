/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CourseWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  GuardianWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
  InstructorWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
  LogInInput: { // input type
    password: string; // String!
    username: string; // String!
  }
  RegisterUserInput: { // input type
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    token: string; // String!
    username: string; // String!
  }
  StudentWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  GradeLevel: "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH"
}

export interface NexusGenRootTypes {
  Admin: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  Course: { // root type
    id: string; // String!
    name: string; // String!
    suggestedLevel: NexusGenEnums['GradeLevel']; // GradeLevel!
  }
  Guardian: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  Instructor: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  Mutation: {};
  Query: {};
  Student: { // root type
    firstName: string; // String!
    gradeLevel: NexusGenEnums['GradeLevel']; // GradeLevel!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  User: NexusGenRootTypes['Admin'] | NexusGenRootTypes['Instructor'] | NexusGenRootTypes['Student'] | NexusGenRootTypes['Guardian'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CourseWhereUniqueInput: NexusGenInputs['CourseWhereUniqueInput'];
  GuardianWhereUniqueInput: NexusGenInputs['GuardianWhereUniqueInput'];
  InstructorWhereUniqueInput: NexusGenInputs['InstructorWhereUniqueInput'];
  LogInInput: NexusGenInputs['LogInInput'];
  RegisterUserInput: NexusGenInputs['RegisterUserInput'];
  StudentWhereUniqueInput: NexusGenInputs['StudentWhereUniqueInput'];
  GradeLevel: NexusGenEnums['GradeLevel'];
}

export interface NexusGenFieldTypes {
  Admin: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  Course: { // field return type
    id: string; // String!
    instructors: NexusGenRootTypes['Instructor'][]; // [Instructor!]!
    name: string; // String!
    students: NexusGenRootTypes['Student'][]; // [Student!]!
    suggestedLevel: NexusGenEnums['GradeLevel']; // GradeLevel!
  }
  Guardian: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    students: NexusGenRootTypes['Student'][]; // [Student!]!
    username: string; // String!
  }
  Instructor: { // field return type
    courses: NexusGenRootTypes['Course'][]; // [Course!]!
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  Mutation: { // field return type
    logIn: NexusGenRootTypes['User']; // User!
    registerUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    viewer: NexusGenRootTypes['User']; // User!
  }
  Student: { // field return type
    firstName: string; // String!
    gradeLevel: NexusGenEnums['GradeLevel']; // GradeLevel!
    guardians: NexusGenRootTypes['Guardian'][]; // [Guardian!]!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
  User: { // field return type
    firstName: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
}

export interface NexusGenArgTypes {
  Course: {
    instructors: { // args
      after?: NexusGenInputs['InstructorWhereUniqueInput'] | null; // InstructorWhereUniqueInput
      before?: NexusGenInputs['InstructorWhereUniqueInput'] | null; // InstructorWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    students: { // args
      after?: NexusGenInputs['StudentWhereUniqueInput'] | null; // StudentWhereUniqueInput
      before?: NexusGenInputs['StudentWhereUniqueInput'] | null; // StudentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Guardian: {
    students: { // args
      after?: NexusGenInputs['StudentWhereUniqueInput'] | null; // StudentWhereUniqueInput
      before?: NexusGenInputs['StudentWhereUniqueInput'] | null; // StudentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Instructor: {
    courses: { // args
      after?: NexusGenInputs['CourseWhereUniqueInput'] | null; // CourseWhereUniqueInput
      before?: NexusGenInputs['CourseWhereUniqueInput'] | null; // CourseWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    logIn: { // args
      input: NexusGenInputs['LogInInput']; // LogInInput!
    }
    registerUser: { // args
      input: NexusGenInputs['RegisterUserInput']; // RegisterUserInput!
    }
  }
  Student: {
    guardians: { // args
      after?: NexusGenInputs['GuardianWhereUniqueInput'] | null; // GuardianWhereUniqueInput
      before?: NexusGenInputs['GuardianWhereUniqueInput'] | null; // GuardianWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  User: "Admin" | "Instructor" | "Student" | "Guardian"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Admin" | "Course" | "Guardian" | "Instructor" | "Mutation" | "Query" | "Student";

export type NexusGenInputNames = "CourseWhereUniqueInput" | "GuardianWhereUniqueInput" | "InstructorWhereUniqueInput" | "LogInInput" | "RegisterUserInput" | "StudentWhereUniqueInput";

export type NexusGenEnumNames = "GradeLevel";

export type NexusGenInterfaceNames = "User";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}