/* tslint:disable */
/* eslint-disable */
/* @relayHash eea73cf0bf0b2a6564e17d887f18fcba */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "%future added value" | "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type LessonCreateInput = {
    id?: string | null;
    lessonPlan?: LessonPlanCreateOneWithoutLessonsInput | null;
    slides?: SlideCreateManyWithoutLessonInput | null;
    title: string;
};
export type LessonPlanCreateOneWithoutLessonsInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutLessonsInput | null;
};
export type LessonPlanWhereUniqueInput = {
    id?: string | null;
};
export type LessonPlanCreateWithoutLessonsInput = {
    course: CourseCreateOneWithoutLessonPlanInput;
    id?: string | null;
};
export type CourseCreateOneWithoutLessonPlanInput = {
    connect?: CourseWhereUniqueInput | null;
    create?: CourseCreateWithoutLessonPlanInput | null;
};
export type CourseWhereUniqueInput = {
    id?: string | null;
};
export type CourseCreateWithoutLessonPlanInput = {
    contents?: ContentCreateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
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
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseCreateManyWithoutStudentInput | null;
    user: UserCreateOneWithoutStudentInput;
};
export type CourseCreateManyWithoutStudentsInput = {
    connect?: Array<CourseWhereUniqueInput> | null;
    create?: Array<CourseCreateWithoutStudentsInput> | null;
};
export type CourseCreateWithoutStudentsInput = {
    contents?: ContentCreateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    instructors?: InstructorCreateManyWithoutCoursesInput | null;
    lessonPlan: LessonPlanCreateOneWithoutCourseInput;
    name: string;
    suggestedLevel: GradeLevel;
};
export type LessonPlanCreateOneWithoutCourseInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutCourseInput | null;
};
export type LessonPlanCreateWithoutCourseInput = {
    id?: string | null;
    lessons?: LessonCreateManyWithoutLessonPlanInput | null;
};
export type LessonCreateManyWithoutLessonPlanInput = {
    connect?: Array<LessonWhereUniqueInput> | null;
    create?: Array<LessonCreateWithoutLessonPlanInput> | null;
};
export type LessonWhereUniqueInput = {
    id?: string | null;
};
export type LessonCreateWithoutLessonPlanInput = {
    id?: string | null;
    slides?: SlideCreateManyWithoutLessonInput | null;
    title: string;
};
export type SlideCreateManyWithoutLessonInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutLessonInput> | null;
};
export type SlideWhereUniqueInput = {
    id?: string | null;
};
export type SlideCreateWithoutLessonInput = {
    halfSlide?: HalfSlideCreateOneWithoutSlidesInput | null;
    id?: string | null;
    quarterSlide?: QuarterSlideCreateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideCreateOneWithoutSlidesInput | null;
    title: string;
};
export type HalfSlideCreateOneWithoutSlidesInput = {
    connect?: HalfSlideWhereUniqueInput | null;
    create?: HalfSlideCreateWithoutSlidesInput | null;
};
export type HalfSlideWhereUniqueInput = {
    id?: string | null;
};
export type HalfSlideCreateWithoutSlidesInput = {
    firstHalfBlock: BlockCreateOneWithoutHalfSlidesInput;
    id?: string | null;
    secondHalfBlock: BlockCreateOneWithoutHalfSlidesImplementingInput;
};
export type BlockCreateOneWithoutHalfSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutHalfSlidesInput | null;
};
export type BlockWhereUniqueInput = {
    id?: string | null;
};
export type BlockCreateWithoutHalfSlidesInput = {
    halfSlidesImplementing?: HalfSlideCreateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideCreateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideCreateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideCreateManyWithoutBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type HalfSlideCreateManyWithoutSecondHalfBlockInput = {
    connect?: Array<HalfSlideWhereUniqueInput> | null;
    create?: Array<HalfSlideCreateWithoutSecondHalfBlockInput> | null;
};
export type HalfSlideCreateWithoutSecondHalfBlockInput = {
    firstHalfBlock: BlockCreateOneWithoutHalfSlidesInput;
    id?: string | null;
    slides?: SlideCreateManyWithoutHalfSlideInput | null;
};
export type SlideCreateManyWithoutHalfSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutHalfSlideInput> | null;
};
export type SlideCreateWithoutHalfSlideInput = {
    id?: string | null;
    lesson?: LessonCreateOneWithoutSlidesInput | null;
    quarterSlide?: QuarterSlideCreateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideCreateOneWithoutSlidesInput | null;
    title: string;
};
export type LessonCreateOneWithoutSlidesInput = {
    connect?: LessonWhereUniqueInput | null;
    create?: LessonCreateWithoutSlidesInput | null;
};
export type LessonCreateWithoutSlidesInput = {
    id?: string | null;
    lessonPlan?: LessonPlanCreateOneWithoutLessonsInput | null;
    title: string;
};
export type QuarterSlideCreateOneWithoutSlidesInput = {
    connect?: QuarterSlideWhereUniqueInput | null;
    create?: QuarterSlideCreateWithoutSlidesInput | null;
};
export type QuarterSlideWhereUniqueInput = {
    id?: string | null;
};
export type QuarterSlideCreateWithoutSlidesInput = {
    id?: string | null;
    mainBlock: BlockCreateOneWithoutQuarterSlidesInput;
    sideBlock: BlockCreateOneWithoutQuarterSlidesImplementingInput;
};
export type BlockCreateOneWithoutQuarterSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutQuarterSlidesInput | null;
};
export type BlockCreateWithoutQuarterSlidesInput = {
    halfSlides?: HalfSlideCreateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideCreateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput | null;
    quarterSlidesImplementing?: QuarterSlideCreateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideCreateManyWithoutBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type HalfSlideCreateManyWithoutFirstHalfBlockInput = {
    connect?: Array<HalfSlideWhereUniqueInput> | null;
    create?: Array<HalfSlideCreateWithoutFirstHalfBlockInput> | null;
};
export type HalfSlideCreateWithoutFirstHalfBlockInput = {
    id?: string | null;
    secondHalfBlock: BlockCreateOneWithoutHalfSlidesImplementingInput;
    slides?: SlideCreateManyWithoutHalfSlideInput | null;
};
export type BlockCreateOneWithoutHalfSlidesImplementingInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutHalfSlidesImplementingInput | null;
};
export type BlockCreateWithoutHalfSlidesImplementingInput = {
    halfSlides?: HalfSlideCreateManyWithoutFirstHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideCreateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideCreateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideCreateManyWithoutBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutBlocksInput | null;
};
export type MultipleChoiceQuestionBlockWhereUniqueInput = {
    id?: string | null;
};
export type MultipleChoiceQuestionBlockCreateWithoutBlocksInput = {
    choices?: MultipleChoiceQuestionChoiceCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    responses?: MultipleChoiceQuestionResponseCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    text: string;
};
export type MultipleChoiceQuestionChoiceCreateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type MultipleChoiceQuestionChoiceWhereUniqueInput = {
    id?: string | null;
};
export type MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionBlockInput = {
    correct: boolean;
    id?: string | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseCreateManyWithoutChoiceInput | null;
    text: string;
};
export type MultipleChoiceQuestionResponseCreateManyWithoutChoiceInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutChoiceInput> | null;
};
export type MultipleChoiceQuestionResponseWhereUniqueInput = {
    id?: string | null;
};
export type MultipleChoiceQuestionResponseCreateWithoutChoiceInput = {
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutResponsesInput | null;
    student: StudentCreateOneWithoutMultipleChoiceQuestionResponsesInput;
};
export type MultipleChoiceQuestionBlockCreateOneWithoutResponsesInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutResponsesInput | null;
};
export type MultipleChoiceQuestionBlockCreateWithoutResponsesInput = {
    blocks?: BlockCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    choices?: MultipleChoiceQuestionChoiceCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    text: string;
};
export type BlockCreateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<BlockWhereUniqueInput> | null;
    create?: Array<BlockCreateWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type BlockCreateWithoutMultipleChoiceQuestionBlockInput = {
    halfSlides?: HalfSlideCreateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideCreateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    quarterSlides?: QuarterSlideCreateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideCreateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideCreateManyWithoutBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type QuarterSlideCreateManyWithoutMainBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutMainBlockInput> | null;
};
export type QuarterSlideCreateWithoutMainBlockInput = {
    id?: string | null;
    sideBlock: BlockCreateOneWithoutQuarterSlidesImplementingInput;
    slides?: SlideCreateManyWithoutQuarterSlideInput | null;
};
export type BlockCreateOneWithoutQuarterSlidesImplementingInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutQuarterSlidesImplementingInput | null;
};
export type BlockCreateWithoutQuarterSlidesImplementingInput = {
    halfSlides?: HalfSlideCreateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideCreateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideCreateManyWithoutMainBlockInput | null;
    singleSlides?: SingleSlideCreateManyWithoutBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type SingleSlideCreateManyWithoutBlockInput = {
    connect?: Array<SingleSlideWhereUniqueInput> | null;
    create?: Array<SingleSlideCreateWithoutBlockInput> | null;
};
export type SingleSlideWhereUniqueInput = {
    id?: string | null;
};
export type SingleSlideCreateWithoutBlockInput = {
    id?: string | null;
    slides?: SlideCreateManyWithoutSingleSlideInput | null;
};
export type SlideCreateManyWithoutSingleSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutSingleSlideInput> | null;
};
export type SlideCreateWithoutSingleSlideInput = {
    halfSlide?: HalfSlideCreateOneWithoutSlidesInput | null;
    id?: string | null;
    lesson?: LessonCreateOneWithoutSlidesInput | null;
    quarterSlide?: QuarterSlideCreateOneWithoutSlidesInput | null;
    title: string;
};
export type TextBlockCreateOneWithoutBlocksInput = {
    connect?: TextBlockWhereUniqueInput | null;
    create?: TextBlockCreateWithoutBlocksInput | null;
};
export type TextBlockWhereUniqueInput = {
    id?: string | null;
};
export type TextBlockCreateWithoutBlocksInput = {
    body: string;
    id?: string | null;
    title: string;
};
export type SlideCreateManyWithoutQuarterSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutQuarterSlideInput> | null;
};
export type SlideCreateWithoutQuarterSlideInput = {
    halfSlide?: HalfSlideCreateOneWithoutSlidesInput | null;
    id?: string | null;
    lesson?: LessonCreateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideCreateOneWithoutSlidesInput | null;
    title: string;
};
export type SingleSlideCreateOneWithoutSlidesInput = {
    connect?: SingleSlideWhereUniqueInput | null;
    create?: SingleSlideCreateWithoutSlidesInput | null;
};
export type SingleSlideCreateWithoutSlidesInput = {
    block: BlockCreateOneWithoutSingleSlidesInput;
    id?: string | null;
};
export type BlockCreateOneWithoutSingleSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutSingleSlidesInput | null;
};
export type BlockCreateWithoutSingleSlidesInput = {
    halfSlides?: HalfSlideCreateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideCreateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideCreateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideCreateManyWithoutSideBlockInput | null;
    textBlock?: TextBlockCreateOneWithoutBlocksInput | null;
};
export type QuarterSlideCreateManyWithoutSideBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutSideBlockInput> | null;
};
export type QuarterSlideCreateWithoutSideBlockInput = {
    id?: string | null;
    mainBlock: BlockCreateOneWithoutQuarterSlidesInput;
    slides?: SlideCreateManyWithoutQuarterSlideInput | null;
};
export type StudentCreateOneWithoutMultipleChoiceQuestionResponsesInput = {
    connect?: StudentWhereUniqueInput | null;
    create?: StudentCreateWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type StudentCreateWithoutMultipleChoiceQuestionResponsesInput = {
    courses?: CourseCreateManyWithoutStudentsInput | null;
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
    description?: string | null;
    id?: string | null;
    lessonPlan: LessonPlanCreateOneWithoutCourseInput;
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
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseCreateManyWithoutStudentInput | null;
    user: UserCreateOneWithoutStudentInput;
};
export type MultipleChoiceQuestionResponseCreateManyWithoutStudentInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutStudentInput> | null;
};
export type MultipleChoiceQuestionResponseCreateWithoutStudentInput = {
    choice: MultipleChoiceQuestionChoiceCreateOneWithoutMultipleChoiceQuestionResponsesInput;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutResponsesInput | null;
};
export type MultipleChoiceQuestionChoiceCreateOneWithoutMultipleChoiceQuestionResponsesInput = {
    connect?: MultipleChoiceQuestionChoiceWhereUniqueInput | null;
    create?: MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionResponsesInput = {
    correct: boolean;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockCreateOneWithoutChoicesInput | null;
    text: string;
};
export type MultipleChoiceQuestionBlockCreateOneWithoutChoicesInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutChoicesInput | null;
};
export type MultipleChoiceQuestionBlockCreateWithoutChoicesInput = {
    blocks?: BlockCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    responses?: MultipleChoiceQuestionResponseCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    text: string;
};
export type MultipleChoiceQuestionResponseCreateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput = {
    choice: MultipleChoiceQuestionChoiceCreateOneWithoutMultipleChoiceQuestionResponsesInput;
    id?: string | null;
    student: StudentCreateOneWithoutMultipleChoiceQuestionResponsesInput;
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
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseCreateManyWithoutStudentInput | null;
};
export type CreateOneLessonMutationVariables = {
    data: LessonCreateInput;
};
export type CreateOneLessonMutationResponse = {
    readonly createOneLesson: {
        readonly id: string;
        readonly title: string;
        readonly slides: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"LessonPreview_lesson">;
    };
};
export type CreateOneLessonMutation = {
    readonly response: CreateOneLessonMutationResponse;
    readonly variables: CreateOneLessonMutationVariables;
};



/*
mutation CreateOneLessonMutation(
  $data: LessonCreateInput!
) {
  createOneLesson(data: $data) {
    id
    title
    slides {
      __typename
      id
    }
    ...LessonPreview_lesson
  }
}

fragment LessonPreview_lesson on Lesson {
  id
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "LessonCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOneLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "LessonPreview_lesson",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOneLessonMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createOneLesson",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "slides",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOneLessonMutation",
    "id": null,
    "text": "mutation CreateOneLessonMutation(\n  $data: LessonCreateInput!\n) {\n  createOneLesson(data: $data) {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n    ...LessonPreview_lesson\n  }\n}\n\nfragment LessonPreview_lesson on Lesson {\n  id\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'de8159bef6c1e077225f9085d13b4f76';
export default node;
