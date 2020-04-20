/* tslint:disable */
/* eslint-disable */
/* @relayHash 26d15d8b9be61082299553c33b1a87ea */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseWhereInput = {
    AND?: Array<CourseWhereInput> | null;
    contents?: ContentFilter | null;
    createdAt?: DateTimeFilter | null;
    id?: StringFilter | null;
    instructors?: InstructorFilter | null;
    lessonPlan?: LessonPlanWhereInput | null;
    name?: StringFilter | null;
    NOT?: Array<CourseWhereInput> | null;
    OR?: Array<CourseWhereInput> | null;
    students?: StudentFilter | null;
    suggestedLevel?: GradeLevel | null;
};
export type ContentFilter = {
    every?: ContentWhereInput | null;
    none?: ContentWhereInput | null;
    some?: ContentWhereInput | null;
};
export type ContentWhereInput = {
    AND?: Array<ContentWhereInput> | null;
    author?: StringFilter | null;
    course?: CourseWhereInput | null;
    createdAt?: DateTimeFilter | null;
    id?: StringFilter | null;
    NOT?: Array<ContentWhereInput> | null;
    OR?: Array<ContentWhereInput> | null;
    pages?: PageFilter | null;
    title?: StringFilter | null;
};
export type StringFilter = {
    contains?: string | null;
    endsWith?: string | null;
    equals?: string | null;
    gt?: string | null;
    gte?: string | null;
    in?: Array<string> | null;
    lt?: string | null;
    lte?: string | null;
    not?: string | null;
    notIn?: Array<string> | null;
    startsWith?: string | null;
};
export type DateTimeFilter = {
    equals?: unknown | null;
    gt?: unknown | null;
    gte?: unknown | null;
    in?: Array<unknown> | null;
    lt?: unknown | null;
    lte?: unknown | null;
    not?: unknown | null;
    notIn?: Array<unknown> | null;
};
export type PageFilter = {
    every?: PageWhereInput | null;
    none?: PageWhereInput | null;
    some?: PageWhereInput | null;
};
export type PageWhereInput = {
    AND?: Array<PageWhereInput> | null;
    content?: ContentWhereInput | null;
    createdAt?: DateTimeFilter | null;
    data?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<PageWhereInput> | null;
    OR?: Array<PageWhereInput> | null;
};
export type InstructorFilter = {
    every?: InstructorWhereInput | null;
    none?: InstructorWhereInput | null;
    some?: InstructorWhereInput | null;
};
export type InstructorWhereInput = {
    AND?: Array<InstructorWhereInput> | null;
    courses?: CourseFilter | null;
    createdAt?: DateTimeFilter | null;
    email?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<InstructorWhereInput> | null;
    OR?: Array<InstructorWhereInput> | null;
    user?: UserWhereInput | null;
};
export type CourseFilter = {
    every?: CourseWhereInput | null;
    none?: CourseWhereInput | null;
    some?: CourseWhereInput | null;
};
export type UserWhereInput = {
    admin?: AdminWhereInput | null;
    AND?: Array<UserWhereInput> | null;
    firstName?: StringFilter | null;
    guardian?: GuardianWhereInput | null;
    id?: StringFilter | null;
    instructor?: InstructorWhereInput | null;
    lastName?: StringFilter | null;
    NOT?: Array<UserWhereInput> | null;
    OR?: Array<UserWhereInput> | null;
    password?: StringFilter | null;
    student?: StudentWhereInput | null;
    username?: StringFilter | null;
};
export type AdminWhereInput = {
    AND?: Array<AdminWhereInput> | null;
    createdAt?: DateTimeFilter | null;
    email?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<AdminWhereInput> | null;
    OR?: Array<AdminWhereInput> | null;
    user?: UserWhereInput | null;
};
export type GuardianWhereInput = {
    AND?: Array<GuardianWhereInput> | null;
    createdAt?: DateTimeFilter | null;
    email?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<GuardianWhereInput> | null;
    OR?: Array<GuardianWhereInput> | null;
    students?: StudentFilter | null;
    user?: UserWhereInput | null;
};
export type StudentFilter = {
    every?: StudentWhereInput | null;
    none?: StudentWhereInput | null;
    some?: StudentWhereInput | null;
};
export type StudentWhereInput = {
    AND?: Array<StudentWhereInput> | null;
    courses?: CourseFilter | null;
    createdAt?: DateTimeFilter | null;
    gradeLevel?: GradeLevel | null;
    guardians?: GuardianFilter | null;
    id?: StringFilter | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseFilter | null;
    NOT?: Array<StudentWhereInput> | null;
    OR?: Array<StudentWhereInput> | null;
    user?: UserWhereInput | null;
};
export type GuardianFilter = {
    every?: GuardianWhereInput | null;
    none?: GuardianWhereInput | null;
    some?: GuardianWhereInput | null;
};
export type MultipleChoiceQuestionResponseFilter = {
    every?: MultipleChoiceQuestionResponseWhereInput | null;
    none?: MultipleChoiceQuestionResponseWhereInput | null;
    some?: MultipleChoiceQuestionResponseWhereInput | null;
};
export type MultipleChoiceQuestionResponseWhereInput = {
    AND?: Array<MultipleChoiceQuestionResponseWhereInput> | null;
    choice?: MultipleChoiceQuestionChoiceWhereInput | null;
    id?: StringFilter | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockWhereInput | null;
    NOT?: Array<MultipleChoiceQuestionResponseWhereInput> | null;
    OR?: Array<MultipleChoiceQuestionResponseWhereInput> | null;
    student?: StudentWhereInput | null;
};
export type MultipleChoiceQuestionChoiceWhereInput = {
    AND?: Array<MultipleChoiceQuestionChoiceWhereInput> | null;
    correct?: BooleanFilter | null;
    id?: StringFilter | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockWhereInput | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseFilter | null;
    NOT?: Array<MultipleChoiceQuestionChoiceWhereInput> | null;
    OR?: Array<MultipleChoiceQuestionChoiceWhereInput> | null;
    text?: StringFilter | null;
};
export type BooleanFilter = {
    equals?: boolean | null;
    not?: boolean | null;
};
export type MultipleChoiceQuestionBlockWhereInput = {
    AND?: Array<MultipleChoiceQuestionBlockWhereInput> | null;
    blocks?: BlockFilter | null;
    choices?: MultipleChoiceQuestionChoiceFilter | null;
    id?: StringFilter | null;
    NOT?: Array<MultipleChoiceQuestionBlockWhereInput> | null;
    OR?: Array<MultipleChoiceQuestionBlockWhereInput> | null;
    responses?: MultipleChoiceQuestionResponseFilter | null;
    text?: StringFilter | null;
};
export type BlockFilter = {
    every?: BlockWhereInput | null;
    none?: BlockWhereInput | null;
    some?: BlockWhereInput | null;
};
export type BlockWhereInput = {
    AND?: Array<BlockWhereInput> | null;
    halfSlides?: HalfSlideFilter | null;
    halfSlidesImplementing?: HalfSlideFilter | null;
    id?: StringFilter | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockWhereInput | null;
    NOT?: Array<BlockWhereInput> | null;
    OR?: Array<BlockWhereInput> | null;
    quarterSlides?: QuarterSlideFilter | null;
    quarterSlidesImplementing?: QuarterSlideFilter | null;
    singleSlides?: SingleSlideFilter | null;
    textBlock?: TextBlockWhereInput | null;
};
export type HalfSlideFilter = {
    every?: HalfSlideWhereInput | null;
    none?: HalfSlideWhereInput | null;
    some?: HalfSlideWhereInput | null;
};
export type HalfSlideWhereInput = {
    AND?: Array<HalfSlideWhereInput> | null;
    firstHalfBlock?: BlockWhereInput | null;
    id?: StringFilter | null;
    NOT?: Array<HalfSlideWhereInput> | null;
    OR?: Array<HalfSlideWhereInput> | null;
    secondHalfBlock?: BlockWhereInput | null;
    slides?: SlideFilter | null;
};
export type SlideFilter = {
    every?: SlideWhereInput | null;
    none?: SlideWhereInput | null;
    some?: SlideWhereInput | null;
};
export type SlideWhereInput = {
    AND?: Array<SlideWhereInput> | null;
    halfSlide?: HalfSlideWhereInput | null;
    id?: StringFilter | null;
    lesson?: LessonWhereInput | null;
    NOT?: Array<SlideWhereInput> | null;
    OR?: Array<SlideWhereInput> | null;
    quarterSlide?: QuarterSlideWhereInput | null;
    singleSlide?: SingleSlideWhereInput | null;
    title?: StringFilter | null;
};
export type LessonWhereInput = {
    AND?: Array<LessonWhereInput> | null;
    id?: StringFilter | null;
    lessonPlan?: LessonPlanWhereInput | null;
    NOT?: Array<LessonWhereInput> | null;
    OR?: Array<LessonWhereInput> | null;
    slides?: SlideFilter | null;
    title?: StringFilter | null;
};
export type LessonPlanWhereInput = {
    AND?: Array<LessonPlanWhereInput> | null;
    course?: CourseWhereInput | null;
    id?: StringFilter | null;
    lessons?: LessonFilter | null;
    NOT?: Array<LessonPlanWhereInput> | null;
    OR?: Array<LessonPlanWhereInput> | null;
};
export type LessonFilter = {
    every?: LessonWhereInput | null;
    none?: LessonWhereInput | null;
    some?: LessonWhereInput | null;
};
export type QuarterSlideWhereInput = {
    AND?: Array<QuarterSlideWhereInput> | null;
    id?: StringFilter | null;
    mainBlock?: BlockWhereInput | null;
    NOT?: Array<QuarterSlideWhereInput> | null;
    OR?: Array<QuarterSlideWhereInput> | null;
    sideBlock?: BlockWhereInput | null;
    slides?: SlideFilter | null;
};
export type SingleSlideWhereInput = {
    AND?: Array<SingleSlideWhereInput> | null;
    block?: BlockWhereInput | null;
    id?: StringFilter | null;
    NOT?: Array<SingleSlideWhereInput> | null;
    OR?: Array<SingleSlideWhereInput> | null;
    slides?: SlideFilter | null;
};
export type QuarterSlideFilter = {
    every?: QuarterSlideWhereInput | null;
    none?: QuarterSlideWhereInput | null;
    some?: QuarterSlideWhereInput | null;
};
export type SingleSlideFilter = {
    every?: SingleSlideWhereInput | null;
    none?: SingleSlideWhereInput | null;
    some?: SingleSlideWhereInput | null;
};
export type TextBlockWhereInput = {
    AND?: Array<TextBlockWhereInput> | null;
    blocks?: BlockFilter | null;
    body?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<TextBlockWhereInput> | null;
    OR?: Array<TextBlockWhereInput> | null;
    title?: StringFilter | null;
};
export type MultipleChoiceQuestionChoiceFilter = {
    every?: MultipleChoiceQuestionChoiceWhereInput | null;
    none?: MultipleChoiceQuestionChoiceWhereInput | null;
    some?: MultipleChoiceQuestionChoiceWhereInput | null;
};
export type EditCoursePageQueryVariables = {
    where?: CourseWhereInput | null;
};
export type EditCoursePageQueryResponse = {
    readonly courses: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
    }>;
};
export type EditCoursePageQuery = {
    readonly response: EditCoursePageQueryResponse;
    readonly variables: EditCoursePageQueryVariables;
};



/*
query EditCoursePageQuery(
  $where: CourseWhereInput
) {
  courses(where: $where) {
    ...EditCourse_course
  }
}

fragment EditCourse_course on Course {
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "CourseWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditCoursePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditCourse_course",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditCoursePageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "courses",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditCoursePageQuery",
    "id": null,
    "text": "query EditCoursePageQuery(\n  $where: CourseWhereInput\n) {\n  courses(where: $where) {\n    ...EditCourse_course\n  }\n}\n\nfragment EditCourse_course on Course {\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5d8f7e507810a01ea9cd347594ad1bc7';
export default node;
