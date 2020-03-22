/* tslint:disable */
/* eslint-disable */
/* @relayHash 2748fbcb2e5e097057b96ebd297e06ad */

import { ConcreteRequest } from "relay-runtime";
export type GradeLevel = "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseCreateInput = {
    contents?: ContentCreateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    id?: string | null;
    instructors?: InstructorCreateManyWithoutCoursesInput | null;
    name: string;
    students?: StudentCreateManyWithoutCoursesInput | null;
    suggestedLevel: GradeLevel;
};
export type ContentCreateManyWithoutCourseInput = {
    connect?: Array<ContentWhereUniqueInput> | null;
    create?: Array<ContentCreateWithoutCourseInput> | null;
};
export type ContentWhereUniqueInput = {
    id?: string | null;
};
export type ContentCreateWithoutCourseInput = {
    author: string;
    createdAt?: unknown | null;
    id?: string | null;
    pages?: PageCreateManyWithoutContentInput | null;
    title: string;
};
export type PageCreateManyWithoutContentInput = {
    connect?: Array<PageWhereUniqueInput> | null;
    create?: Array<PageCreateWithoutContentInput> | null;
};
export type PageWhereUniqueInput = {
    id?: string | null;
};
export type PageCreateWithoutContentInput = {
    createdAt?: unknown | null;
    data: string;
    id?: string | null;
};
export type InstructorCreateManyWithoutCoursesInput = {
    connect?: Array<InstructorWhereUniqueInput> | null;
    create?: Array<InstructorCreateWithoutCoursesInput> | null;
};
export type InstructorWhereUniqueInput = {
    email?: string | null;
    id?: string | null;
};
export type InstructorCreateWithoutCoursesInput = {
    createdAt?: unknown | null;
    email: string;
    id?: string | null;
    user: UserCreateOneWithoutInstructorInput;
};
export type UserCreateOneWithoutInstructorInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutInstructorInput | null;
};
export type UserWhereUniqueInput = {
    id?: string | null;
    username?: string | null;
};
export type UserCreateWithoutInstructorInput = {
    admin?: AdminCreateOneWithoutUserInput | null;
    firstName: string;
    guardian?: GuardianCreateOneWithoutUserInput | null;
    id?: string | null;
    lastName: string;
    password: string;
    student?: StudentCreateOneWithoutUserInput | null;
    username: string;
};
export type AdminCreateOneWithoutUserInput = {
    connect?: AdminWhereUniqueInput | null;
    create?: AdminCreateWithoutUserInput | null;
};
export type AdminWhereUniqueInput = {
    email?: string | null;
    id?: string | null;
};
export type AdminCreateWithoutUserInput = {
    createdAt?: unknown | null;
    email: string;
    id?: string | null;
};
export type GuardianCreateOneWithoutUserInput = {
    connect?: GuardianWhereUniqueInput | null;
    create?: GuardianCreateWithoutUserInput | null;
};
export type GuardianWhereUniqueInput = {
    email?: string | null;
    id?: string | null;
};
export type GuardianCreateWithoutUserInput = {
    createdAt?: unknown | null;
    email: string;
    id?: string | null;
    students?: StudentCreateManyWithoutGuardiansInput | null;
};
export type StudentCreateManyWithoutGuardiansInput = {
    connect?: Array<StudentWhereUniqueInput> | null;
    create?: Array<StudentCreateWithoutGuardiansInput> | null;
};
export type StudentWhereUniqueInput = {
    id?: string | null;
};
export type StudentCreateWithoutGuardiansInput = {
    courses?: CourseCreateManyWithoutStudentsInput | null;
    createdAt?: unknown | null;
    gradeLevel: GradeLevel;
    id?: string | null;
    user: UserCreateOneWithoutStudentInput;
};
export type CourseCreateManyWithoutStudentsInput = {
    connect?: Array<CourseWhereUniqueInput> | null;
    create?: Array<CourseCreateWithoutStudentsInput> | null;
};
export type CourseWhereUniqueInput = {
    id?: string | null;
};
export type CourseCreateWithoutStudentsInput = {
    contents?: ContentCreateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    id?: string | null;
    instructors?: InstructorCreateManyWithoutCoursesInput | null;
    name: string;
    suggestedLevel: GradeLevel;
};
export type UserCreateOneWithoutStudentInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutStudentInput | null;
};
export type UserCreateWithoutStudentInput = {
    admin?: AdminCreateOneWithoutUserInput | null;
    firstName: string;
    guardian?: GuardianCreateOneWithoutUserInput | null;
    id?: string | null;
    instructor?: InstructorCreateOneWithoutUserInput | null;
    lastName: string;
    password: string;
    username: string;
};
export type InstructorCreateOneWithoutUserInput = {
    connect?: InstructorWhereUniqueInput | null;
    create?: InstructorCreateWithoutUserInput | null;
};
export type InstructorCreateWithoutUserInput = {
    courses?: CourseCreateManyWithoutInstructorsInput | null;
    createdAt?: unknown | null;
    email: string;
    id?: string | null;
};
export type CourseCreateManyWithoutInstructorsInput = {
    connect?: Array<CourseWhereUniqueInput> | null;
    create?: Array<CourseCreateWithoutInstructorsInput> | null;
};
export type CourseCreateWithoutInstructorsInput = {
    contents?: ContentCreateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    id?: string | null;
    name: string;
    students?: StudentCreateManyWithoutCoursesInput | null;
    suggestedLevel: GradeLevel;
};
export type StudentCreateManyWithoutCoursesInput = {
    connect?: Array<StudentWhereUniqueInput> | null;
    create?: Array<StudentCreateWithoutCoursesInput> | null;
};
export type StudentCreateWithoutCoursesInput = {
    createdAt?: unknown | null;
    gradeLevel: GradeLevel;
    guardians?: GuardianCreateManyWithoutStudentsInput | null;
    id?: string | null;
    user: UserCreateOneWithoutStudentInput;
};
export type GuardianCreateManyWithoutStudentsInput = {
    connect?: Array<GuardianWhereUniqueInput> | null;
    create?: Array<GuardianCreateWithoutStudentsInput> | null;
};
export type GuardianCreateWithoutStudentsInput = {
    createdAt?: unknown | null;
    email: string;
    id?: string | null;
    user: UserCreateOneWithoutGuardianInput;
};
export type UserCreateOneWithoutGuardianInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutGuardianInput | null;
};
export type UserCreateWithoutGuardianInput = {
    admin?: AdminCreateOneWithoutUserInput | null;
    firstName: string;
    id?: string | null;
    instructor?: InstructorCreateOneWithoutUserInput | null;
    lastName: string;
    password: string;
    student?: StudentCreateOneWithoutUserInput | null;
    username: string;
};
export type StudentCreateOneWithoutUserInput = {
    connect?: StudentWhereUniqueInput | null;
    create?: StudentCreateWithoutUserInput | null;
};
export type StudentCreateWithoutUserInput = {
    courses?: CourseCreateManyWithoutStudentsInput | null;
    createdAt?: unknown | null;
    gradeLevel: GradeLevel;
    guardians?: GuardianCreateManyWithoutStudentsInput | null;
    id?: string | null;
};
export type CreateOneCourseMutationVariables = {
    data: CourseCreateInput;
};
export type CreateOneCourseMutationResponse = {
    readonly createOneCourse: {
        readonly id: string;
        readonly suggestedLevel: GradeLevel;
    };
};
export type CreateOneCourseMutation = {
    readonly response: CreateOneCourseMutationResponse;
    readonly variables: CreateOneCourseMutationVariables;
};



/*
mutation CreateOneCourseMutation(
  $data: CourseCreateInput!
) {
  createOneCourse(data: $data) {
    id
    suggestedLevel
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "CourseCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createOneCourse",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "Course",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "suggestedLevel",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOneCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOneCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOneCourseMutation",
    "id": null,
    "text": "mutation CreateOneCourseMutation(\n  $data: CourseCreateInput!\n) {\n  createOneCourse(data: $data) {\n    id\n    suggestedLevel\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bbd33a4a0e764321efb2c53a25168b1e';
export default node;
