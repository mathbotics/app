/* tslint:disable */
/* eslint-disable */
/* @relayHash 8144c152ac8ae9e26a831b1877adca14 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GradeLevel = "%future added value" | "EIGHTH" | "ELEVENTH" | "FIFTH" | "FIRST" | "FOURTH" | "NINTH" | "SECOND" | "SEVENTH" | "SIXTH" | "TENTH" | "THIRD" | "TWELFTH" | "%future added value";
export type CourseUpdateInput = {
    contents?: ContentUpdateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    instructors?: InstructorUpdateManyWithoutCoursesInput | null;
    lessonPlan?: LessonPlanUpdateOneRequiredWithoutCourseInput | null;
    name?: string | null;
    students?: StudentUpdateManyWithoutCoursesInput | null;
    suggestedLevel?: GradeLevel | null;
};
export type ContentUpdateManyWithoutCourseInput = {
    connect?: Array<ContentWhereUniqueInput> | null;
    create?: Array<ContentCreateWithoutCourseInput> | null;
    delete?: Array<ContentWhereUniqueInput> | null;
    deleteMany?: Array<ContentScalarWhereInput> | null;
    disconnect?: Array<ContentWhereUniqueInput> | null;
    set?: Array<ContentWhereUniqueInput> | null;
    update?: Array<ContentUpdateWithWhereUniqueWithoutCourseInput> | null;
    updateMany?: Array<ContentUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<ContentUpsertWithWhereUniqueWithoutCourseInput> | null;
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
export type ContentScalarWhereInput = {
    AND?: Array<ContentScalarWhereInput> | null;
    author?: StringFilter | null;
    createdAt?: DateTimeFilter | null;
    id?: StringFilter | null;
    NOT?: Array<ContentScalarWhereInput> | null;
    OR?: Array<ContentScalarWhereInput> | null;
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
export type CourseWhereInput = {
    AND?: Array<CourseWhereInput> | null;
    contents?: ContentFilter | null;
    createdAt?: DateTimeFilter | null;
    description?: NullableStringFilter | null;
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
export type NullableStringFilter = {
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
export type ContentUpdateWithWhereUniqueWithoutCourseInput = {
    data: ContentUpdateWithoutCourseDataInput;
    where: ContentWhereUniqueInput;
};
export type ContentUpdateWithoutCourseDataInput = {
    author?: string | null;
    createdAt?: unknown | null;
    id?: string | null;
    pages?: PageUpdateManyWithoutContentInput | null;
    title?: string | null;
};
export type PageUpdateManyWithoutContentInput = {
    connect?: Array<PageWhereUniqueInput> | null;
    create?: Array<PageCreateWithoutContentInput> | null;
    delete?: Array<PageWhereUniqueInput> | null;
    deleteMany?: Array<PageScalarWhereInput> | null;
    disconnect?: Array<PageWhereUniqueInput> | null;
    set?: Array<PageWhereUniqueInput> | null;
    update?: Array<PageUpdateWithWhereUniqueWithoutContentInput> | null;
    updateMany?: Array<PageUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<PageUpsertWithWhereUniqueWithoutContentInput> | null;
};
export type PageScalarWhereInput = {
    AND?: Array<PageScalarWhereInput> | null;
    createdAt?: DateTimeFilter | null;
    data?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<PageScalarWhereInput> | null;
    OR?: Array<PageScalarWhereInput> | null;
};
export type PageUpdateWithWhereUniqueWithoutContentInput = {
    data: PageUpdateWithoutContentDataInput;
    where: PageWhereUniqueInput;
};
export type PageUpdateWithoutContentDataInput = {
    createdAt?: unknown | null;
    data?: string | null;
    id?: string | null;
};
export type PageUpdateManyWithWhereNestedInput = {
    data: PageUpdateManyDataInput;
    where: PageScalarWhereInput;
};
export type PageUpdateManyDataInput = {
    createdAt?: unknown | null;
    data?: string | null;
    id?: string | null;
};
export type PageUpsertWithWhereUniqueWithoutContentInput = {
    create: PageCreateWithoutContentInput;
    update: PageUpdateWithoutContentDataInput;
    where: PageWhereUniqueInput;
};
export type ContentUpdateManyWithWhereNestedInput = {
    data: ContentUpdateManyDataInput;
    where: ContentScalarWhereInput;
};
export type ContentUpdateManyDataInput = {
    author?: string | null;
    createdAt?: unknown | null;
    id?: string | null;
    title?: string | null;
};
export type ContentUpsertWithWhereUniqueWithoutCourseInput = {
    create: ContentCreateWithoutCourseInput;
    update: ContentUpdateWithoutCourseDataInput;
    where: ContentWhereUniqueInput;
};
export type InstructorUpdateManyWithoutCoursesInput = {
    connect?: Array<InstructorWhereUniqueInput> | null;
    create?: Array<InstructorCreateWithoutCoursesInput> | null;
    delete?: Array<InstructorWhereUniqueInput> | null;
    deleteMany?: Array<InstructorScalarWhereInput> | null;
    disconnect?: Array<InstructorWhereUniqueInput> | null;
    set?: Array<InstructorWhereUniqueInput> | null;
    update?: Array<InstructorUpdateWithWhereUniqueWithoutCoursesInput> | null;
    updateMany?: Array<InstructorUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<InstructorUpsertWithWhereUniqueWithoutCoursesInput> | null;
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
export type CourseWhereUniqueInput = {
    id?: string | null;
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
export type ContentCreateManyWithoutCourseInput = {
    connect?: Array<ContentWhereUniqueInput> | null;
    create?: Array<ContentCreateWithoutCourseInput> | null;
};
export type InstructorCreateManyWithoutCoursesInput = {
    connect?: Array<InstructorWhereUniqueInput> | null;
    create?: Array<InstructorCreateWithoutCoursesInput> | null;
};
export type LessonPlanCreateOneWithoutCourseInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutCourseInput | null;
};
export type LessonPlanWhereUniqueInput = {
    id?: string | null;
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
export type LessonPlanCreateOneWithoutLessonsInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutLessonsInput | null;
};
export type LessonPlanCreateWithoutLessonsInput = {
    course: CourseCreateOneWithoutLessonPlanInput;
    id?: string | null;
};
export type CourseCreateOneWithoutLessonPlanInput = {
    connect?: CourseWhereUniqueInput | null;
    create?: CourseCreateWithoutLessonPlanInput | null;
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
export type MultipleChoiceQuestionResponseCreateManyWithoutStudentInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutStudentInput> | null;
};
export type MultipleChoiceQuestionResponseWhereUniqueInput = {
    id?: string | null;
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
export type MultipleChoiceQuestionChoiceWhereUniqueInput = {
    id?: string | null;
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
export type MultipleChoiceQuestionBlockWhereUniqueInput = {
    id?: string | null;
};
export type MultipleChoiceQuestionBlockCreateWithoutChoicesInput = {
    blocks?: BlockCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    responses?: MultipleChoiceQuestionResponseCreateManyWithoutMultipleChoiceQuestionBlockInput | null;
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
export type MultipleChoiceQuestionResponseCreateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput = {
    choice: MultipleChoiceQuestionChoiceCreateOneWithoutMultipleChoiceQuestionResponsesInput;
    id?: string | null;
    student: StudentCreateOneWithoutMultipleChoiceQuestionResponsesInput;
};
export type QuarterSlideCreateManyWithoutMainBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutMainBlockInput> | null;
};
export type QuarterSlideWhereUniqueInput = {
    id?: string | null;
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
export type QuarterSlideCreateOneWithoutSlidesInput = {
    connect?: QuarterSlideWhereUniqueInput | null;
    create?: QuarterSlideCreateWithoutSlidesInput | null;
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
export type QuarterSlideCreateManyWithoutSideBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutSideBlockInput> | null;
};
export type QuarterSlideCreateWithoutSideBlockInput = {
    id?: string | null;
    mainBlock: BlockCreateOneWithoutQuarterSlidesInput;
    slides?: SlideCreateManyWithoutQuarterSlideInput | null;
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
export type InstructorScalarWhereInput = {
    AND?: Array<InstructorScalarWhereInput> | null;
    courses?: CourseFilter | null;
    createdAt?: DateTimeFilter | null;
    email?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<InstructorScalarWhereInput> | null;
    OR?: Array<InstructorScalarWhereInput> | null;
};
export type InstructorUpdateWithWhereUniqueWithoutCoursesInput = {
    data: InstructorUpdateWithoutCoursesDataInput;
    where: InstructorWhereUniqueInput;
};
export type InstructorUpdateWithoutCoursesDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
    user?: UserUpdateOneRequiredWithoutInstructorInput | null;
};
export type UserUpdateOneRequiredWithoutInstructorInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutInstructorInput | null;
    update?: UserUpdateWithoutInstructorDataInput | null;
    upsert?: UserUpsertWithoutInstructorInput | null;
};
export type UserUpdateWithoutInstructorDataInput = {
    admin?: AdminUpdateOneWithoutUserInput | null;
    firstName?: string | null;
    guardian?: GuardianUpdateOneWithoutUserInput | null;
    id?: string | null;
    lastName?: string | null;
    password?: string | null;
    student?: StudentUpdateOneWithoutUserInput | null;
    username?: string | null;
};
export type AdminUpdateOneWithoutUserInput = {
    connect?: AdminWhereUniqueInput | null;
    create?: AdminCreateWithoutUserInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: AdminUpdateWithoutUserDataInput | null;
    upsert?: AdminUpsertWithoutUserInput | null;
};
export type AdminUpdateWithoutUserDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
};
export type AdminUpsertWithoutUserInput = {
    create: AdminCreateWithoutUserInput;
    update: AdminUpdateWithoutUserDataInput;
};
export type GuardianUpdateOneWithoutUserInput = {
    connect?: GuardianWhereUniqueInput | null;
    create?: GuardianCreateWithoutUserInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: GuardianUpdateWithoutUserDataInput | null;
    upsert?: GuardianUpsertWithoutUserInput | null;
};
export type GuardianUpdateWithoutUserDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
    students?: StudentUpdateManyWithoutGuardiansInput | null;
};
export type StudentUpdateManyWithoutGuardiansInput = {
    connect?: Array<StudentWhereUniqueInput> | null;
    create?: Array<StudentCreateWithoutGuardiansInput> | null;
    delete?: Array<StudentWhereUniqueInput> | null;
    deleteMany?: Array<StudentScalarWhereInput> | null;
    disconnect?: Array<StudentWhereUniqueInput> | null;
    set?: Array<StudentWhereUniqueInput> | null;
    update?: Array<StudentUpdateWithWhereUniqueWithoutGuardiansInput> | null;
    updateMany?: Array<StudentUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<StudentUpsertWithWhereUniqueWithoutGuardiansInput> | null;
};
export type StudentScalarWhereInput = {
    AND?: Array<StudentScalarWhereInput> | null;
    courses?: CourseFilter | null;
    createdAt?: DateTimeFilter | null;
    gradeLevel?: GradeLevel | null;
    guardians?: GuardianFilter | null;
    id?: StringFilter | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseFilter | null;
    NOT?: Array<StudentScalarWhereInput> | null;
    OR?: Array<StudentScalarWhereInput> | null;
};
export type StudentUpdateWithWhereUniqueWithoutGuardiansInput = {
    data: StudentUpdateWithoutGuardiansDataInput;
    where: StudentWhereUniqueInput;
};
export type StudentUpdateWithoutGuardiansDataInput = {
    courses?: CourseUpdateManyWithoutStudentsInput | null;
    createdAt?: unknown | null;
    gradeLevel?: GradeLevel | null;
    id?: string | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseUpdateManyWithoutStudentInput | null;
    user?: UserUpdateOneRequiredWithoutStudentInput | null;
};
export type CourseUpdateManyWithoutStudentsInput = {
    connect?: Array<CourseWhereUniqueInput> | null;
    create?: Array<CourseCreateWithoutStudentsInput> | null;
    delete?: Array<CourseWhereUniqueInput> | null;
    deleteMany?: Array<CourseScalarWhereInput> | null;
    disconnect?: Array<CourseWhereUniqueInput> | null;
    set?: Array<CourseWhereUniqueInput> | null;
    update?: Array<CourseUpdateWithWhereUniqueWithoutStudentsInput> | null;
    updateMany?: Array<CourseUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutStudentsInput> | null;
};
export type CourseScalarWhereInput = {
    AND?: Array<CourseScalarWhereInput> | null;
    contents?: ContentFilter | null;
    createdAt?: DateTimeFilter | null;
    description?: NullableStringFilter | null;
    id?: StringFilter | null;
    instructors?: InstructorFilter | null;
    name?: StringFilter | null;
    NOT?: Array<CourseScalarWhereInput> | null;
    OR?: Array<CourseScalarWhereInput> | null;
    students?: StudentFilter | null;
    suggestedLevel?: GradeLevel | null;
};
export type CourseUpdateWithWhereUniqueWithoutStudentsInput = {
    data: CourseUpdateWithoutStudentsDataInput;
    where: CourseWhereUniqueInput;
};
export type CourseUpdateWithoutStudentsDataInput = {
    contents?: ContentUpdateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    instructors?: InstructorUpdateManyWithoutCoursesInput | null;
    lessonPlan?: LessonPlanUpdateOneRequiredWithoutCourseInput | null;
    name?: string | null;
    suggestedLevel?: GradeLevel | null;
};
export type LessonPlanUpdateOneRequiredWithoutCourseInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutCourseInput | null;
    update?: LessonPlanUpdateWithoutCourseDataInput | null;
    upsert?: LessonPlanUpsertWithoutCourseInput | null;
};
export type LessonPlanUpdateWithoutCourseDataInput = {
    id?: string | null;
    lessons?: LessonUpdateManyWithoutLessonPlanInput | null;
};
export type LessonUpdateManyWithoutLessonPlanInput = {
    connect?: Array<LessonWhereUniqueInput> | null;
    create?: Array<LessonCreateWithoutLessonPlanInput> | null;
    delete?: Array<LessonWhereUniqueInput> | null;
    deleteMany?: Array<LessonScalarWhereInput> | null;
    disconnect?: Array<LessonWhereUniqueInput> | null;
    set?: Array<LessonWhereUniqueInput> | null;
    update?: Array<LessonUpdateWithWhereUniqueWithoutLessonPlanInput> | null;
    updateMany?: Array<LessonUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<LessonUpsertWithWhereUniqueWithoutLessonPlanInput> | null;
};
export type LessonScalarWhereInput = {
    AND?: Array<LessonScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<LessonScalarWhereInput> | null;
    OR?: Array<LessonScalarWhereInput> | null;
    slides?: SlideFilter | null;
    title?: StringFilter | null;
};
export type LessonUpdateWithWhereUniqueWithoutLessonPlanInput = {
    data: LessonUpdateWithoutLessonPlanDataInput;
    where: LessonWhereUniqueInput;
};
export type LessonUpdateWithoutLessonPlanDataInput = {
    id?: string | null;
    slides?: SlideUpdateManyWithoutLessonInput | null;
    title?: string | null;
};
export type SlideUpdateManyWithoutLessonInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutLessonInput> | null;
    delete?: Array<SlideWhereUniqueInput> | null;
    deleteMany?: Array<SlideScalarWhereInput> | null;
    disconnect?: Array<SlideWhereUniqueInput> | null;
    set?: Array<SlideWhereUniqueInput> | null;
    update?: Array<SlideUpdateWithWhereUniqueWithoutLessonInput> | null;
    updateMany?: Array<SlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<SlideUpsertWithWhereUniqueWithoutLessonInput> | null;
};
export type SlideScalarWhereInput = {
    AND?: Array<SlideScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<SlideScalarWhereInput> | null;
    OR?: Array<SlideScalarWhereInput> | null;
    title?: StringFilter | null;
};
export type SlideUpdateWithWhereUniqueWithoutLessonInput = {
    data: SlideUpdateWithoutLessonDataInput;
    where: SlideWhereUniqueInput;
};
export type SlideUpdateWithoutLessonDataInput = {
    halfSlide?: HalfSlideUpdateOneWithoutSlidesInput | null;
    id?: string | null;
    quarterSlide?: QuarterSlideUpdateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideUpdateOneWithoutSlidesInput | null;
    title?: string | null;
};
export type HalfSlideUpdateOneWithoutSlidesInput = {
    connect?: HalfSlideWhereUniqueInput | null;
    create?: HalfSlideCreateWithoutSlidesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: HalfSlideUpdateWithoutSlidesDataInput | null;
    upsert?: HalfSlideUpsertWithoutSlidesInput | null;
};
export type HalfSlideUpdateWithoutSlidesDataInput = {
    firstHalfBlock?: BlockUpdateOneRequiredWithoutHalfSlidesInput | null;
    id?: string | null;
    secondHalfBlock?: BlockUpdateOneRequiredWithoutHalfSlidesImplementingInput | null;
};
export type BlockUpdateOneRequiredWithoutHalfSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutHalfSlidesInput | null;
    update?: BlockUpdateWithoutHalfSlidesDataInput | null;
    upsert?: BlockUpsertWithoutHalfSlidesInput | null;
};
export type BlockUpdateWithoutHalfSlidesDataInput = {
    halfSlidesImplementing?: HalfSlideUpdateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideUpdateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideUpdateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideUpdateManyWithoutBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type HalfSlideUpdateManyWithoutSecondHalfBlockInput = {
    connect?: Array<HalfSlideWhereUniqueInput> | null;
    create?: Array<HalfSlideCreateWithoutSecondHalfBlockInput> | null;
    delete?: Array<HalfSlideWhereUniqueInput> | null;
    deleteMany?: Array<HalfSlideScalarWhereInput> | null;
    disconnect?: Array<HalfSlideWhereUniqueInput> | null;
    set?: Array<HalfSlideWhereUniqueInput> | null;
    update?: Array<HalfSlideUpdateWithWhereUniqueWithoutSecondHalfBlockInput> | null;
    updateMany?: Array<HalfSlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<HalfSlideUpsertWithWhereUniqueWithoutSecondHalfBlockInput> | null;
};
export type HalfSlideScalarWhereInput = {
    AND?: Array<HalfSlideScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<HalfSlideScalarWhereInput> | null;
    OR?: Array<HalfSlideScalarWhereInput> | null;
    slides?: SlideFilter | null;
};
export type HalfSlideUpdateWithWhereUniqueWithoutSecondHalfBlockInput = {
    data: HalfSlideUpdateWithoutSecondHalfBlockDataInput;
    where: HalfSlideWhereUniqueInput;
};
export type HalfSlideUpdateWithoutSecondHalfBlockDataInput = {
    firstHalfBlock?: BlockUpdateOneRequiredWithoutHalfSlidesInput | null;
    id?: string | null;
    slides?: SlideUpdateManyWithoutHalfSlideInput | null;
};
export type SlideUpdateManyWithoutHalfSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutHalfSlideInput> | null;
    delete?: Array<SlideWhereUniqueInput> | null;
    deleteMany?: Array<SlideScalarWhereInput> | null;
    disconnect?: Array<SlideWhereUniqueInput> | null;
    set?: Array<SlideWhereUniqueInput> | null;
    update?: Array<SlideUpdateWithWhereUniqueWithoutHalfSlideInput> | null;
    updateMany?: Array<SlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<SlideUpsertWithWhereUniqueWithoutHalfSlideInput> | null;
};
export type SlideUpdateWithWhereUniqueWithoutHalfSlideInput = {
    data: SlideUpdateWithoutHalfSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type SlideUpdateWithoutHalfSlideDataInput = {
    id?: string | null;
    lesson?: LessonUpdateOneWithoutSlidesInput | null;
    quarterSlide?: QuarterSlideUpdateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideUpdateOneWithoutSlidesInput | null;
    title?: string | null;
};
export type LessonUpdateOneWithoutSlidesInput = {
    connect?: LessonWhereUniqueInput | null;
    create?: LessonCreateWithoutSlidesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: LessonUpdateWithoutSlidesDataInput | null;
    upsert?: LessonUpsertWithoutSlidesInput | null;
};
export type LessonUpdateWithoutSlidesDataInput = {
    id?: string | null;
    lessonPlan?: LessonPlanUpdateOneWithoutLessonsInput | null;
    title?: string | null;
};
export type LessonPlanUpdateOneWithoutLessonsInput = {
    connect?: LessonPlanWhereUniqueInput | null;
    create?: LessonPlanCreateWithoutLessonsInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: LessonPlanUpdateWithoutLessonsDataInput | null;
    upsert?: LessonPlanUpsertWithoutLessonsInput | null;
};
export type LessonPlanUpdateWithoutLessonsDataInput = {
    course?: CourseUpdateOneRequiredWithoutLessonPlanInput | null;
    id?: string | null;
};
export type CourseUpdateOneRequiredWithoutLessonPlanInput = {
    connect?: CourseWhereUniqueInput | null;
    create?: CourseCreateWithoutLessonPlanInput | null;
    update?: CourseUpdateWithoutLessonPlanDataInput | null;
    upsert?: CourseUpsertWithoutLessonPlanInput | null;
};
export type CourseUpdateWithoutLessonPlanDataInput = {
    contents?: ContentUpdateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    instructors?: InstructorUpdateManyWithoutCoursesInput | null;
    name?: string | null;
    students?: StudentUpdateManyWithoutCoursesInput | null;
    suggestedLevel?: GradeLevel | null;
};
export type StudentUpdateManyWithoutCoursesInput = {
    connect?: Array<StudentWhereUniqueInput> | null;
    create?: Array<StudentCreateWithoutCoursesInput> | null;
    delete?: Array<StudentWhereUniqueInput> | null;
    deleteMany?: Array<StudentScalarWhereInput> | null;
    disconnect?: Array<StudentWhereUniqueInput> | null;
    set?: Array<StudentWhereUniqueInput> | null;
    update?: Array<StudentUpdateWithWhereUniqueWithoutCoursesInput> | null;
    updateMany?: Array<StudentUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<StudentUpsertWithWhereUniqueWithoutCoursesInput> | null;
};
export type StudentUpdateWithWhereUniqueWithoutCoursesInput = {
    data: StudentUpdateWithoutCoursesDataInput;
    where: StudentWhereUniqueInput;
};
export type StudentUpdateWithoutCoursesDataInput = {
    createdAt?: unknown | null;
    gradeLevel?: GradeLevel | null;
    guardians?: GuardianUpdateManyWithoutStudentsInput | null;
    id?: string | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseUpdateManyWithoutStudentInput | null;
    user?: UserUpdateOneRequiredWithoutStudentInput | null;
};
export type GuardianUpdateManyWithoutStudentsInput = {
    connect?: Array<GuardianWhereUniqueInput> | null;
    create?: Array<GuardianCreateWithoutStudentsInput> | null;
    delete?: Array<GuardianWhereUniqueInput> | null;
    deleteMany?: Array<GuardianScalarWhereInput> | null;
    disconnect?: Array<GuardianWhereUniqueInput> | null;
    set?: Array<GuardianWhereUniqueInput> | null;
    update?: Array<GuardianUpdateWithWhereUniqueWithoutStudentsInput> | null;
    updateMany?: Array<GuardianUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<GuardianUpsertWithWhereUniqueWithoutStudentsInput> | null;
};
export type GuardianScalarWhereInput = {
    AND?: Array<GuardianScalarWhereInput> | null;
    createdAt?: DateTimeFilter | null;
    email?: StringFilter | null;
    id?: StringFilter | null;
    NOT?: Array<GuardianScalarWhereInput> | null;
    OR?: Array<GuardianScalarWhereInput> | null;
    students?: StudentFilter | null;
};
export type GuardianUpdateWithWhereUniqueWithoutStudentsInput = {
    data: GuardianUpdateWithoutStudentsDataInput;
    where: GuardianWhereUniqueInput;
};
export type GuardianUpdateWithoutStudentsDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
    user?: UserUpdateOneRequiredWithoutGuardianInput | null;
};
export type UserUpdateOneRequiredWithoutGuardianInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutGuardianInput | null;
    update?: UserUpdateWithoutGuardianDataInput | null;
    upsert?: UserUpsertWithoutGuardianInput | null;
};
export type UserUpdateWithoutGuardianDataInput = {
    admin?: AdminUpdateOneWithoutUserInput | null;
    firstName?: string | null;
    id?: string | null;
    instructor?: InstructorUpdateOneWithoutUserInput | null;
    lastName?: string | null;
    password?: string | null;
    student?: StudentUpdateOneWithoutUserInput | null;
    username?: string | null;
};
export type InstructorUpdateOneWithoutUserInput = {
    connect?: InstructorWhereUniqueInput | null;
    create?: InstructorCreateWithoutUserInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: InstructorUpdateWithoutUserDataInput | null;
    upsert?: InstructorUpsertWithoutUserInput | null;
};
export type InstructorUpdateWithoutUserDataInput = {
    courses?: CourseUpdateManyWithoutInstructorsInput | null;
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
};
export type CourseUpdateManyWithoutInstructorsInput = {
    connect?: Array<CourseWhereUniqueInput> | null;
    create?: Array<CourseCreateWithoutInstructorsInput> | null;
    delete?: Array<CourseWhereUniqueInput> | null;
    deleteMany?: Array<CourseScalarWhereInput> | null;
    disconnect?: Array<CourseWhereUniqueInput> | null;
    set?: Array<CourseWhereUniqueInput> | null;
    update?: Array<CourseUpdateWithWhereUniqueWithoutInstructorsInput> | null;
    updateMany?: Array<CourseUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutInstructorsInput> | null;
};
export type CourseUpdateWithWhereUniqueWithoutInstructorsInput = {
    data: CourseUpdateWithoutInstructorsDataInput;
    where: CourseWhereUniqueInput;
};
export type CourseUpdateWithoutInstructorsDataInput = {
    contents?: ContentUpdateManyWithoutCourseInput | null;
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    lessonPlan?: LessonPlanUpdateOneRequiredWithoutCourseInput | null;
    name?: string | null;
    students?: StudentUpdateManyWithoutCoursesInput | null;
    suggestedLevel?: GradeLevel | null;
};
export type CourseUpdateManyWithWhereNestedInput = {
    data: CourseUpdateManyDataInput;
    where: CourseScalarWhereInput;
};
export type CourseUpdateManyDataInput = {
    createdAt?: unknown | null;
    description?: string | null;
    id?: string | null;
    name?: string | null;
    suggestedLevel?: GradeLevel | null;
};
export type CourseUpsertWithWhereUniqueWithoutInstructorsInput = {
    create: CourseCreateWithoutInstructorsInput;
    update: CourseUpdateWithoutInstructorsDataInput;
    where: CourseWhereUniqueInput;
};
export type InstructorUpsertWithoutUserInput = {
    create: InstructorCreateWithoutUserInput;
    update: InstructorUpdateWithoutUserDataInput;
};
export type StudentUpdateOneWithoutUserInput = {
    connect?: StudentWhereUniqueInput | null;
    create?: StudentCreateWithoutUserInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: StudentUpdateWithoutUserDataInput | null;
    upsert?: StudentUpsertWithoutUserInput | null;
};
export type StudentUpdateWithoutUserDataInput = {
    courses?: CourseUpdateManyWithoutStudentsInput | null;
    createdAt?: unknown | null;
    gradeLevel?: GradeLevel | null;
    guardians?: GuardianUpdateManyWithoutStudentsInput | null;
    id?: string | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseUpdateManyWithoutStudentInput | null;
};
export type MultipleChoiceQuestionResponseUpdateManyWithoutStudentInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutStudentInput> | null;
    delete?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    deleteMany?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
    disconnect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    set?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    update?: Array<MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutStudentInput> | null;
    updateMany?: Array<MultipleChoiceQuestionResponseUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutStudentInput> | null;
};
export type MultipleChoiceQuestionResponseScalarWhereInput = {
    AND?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
    OR?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
};
export type MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutStudentInput = {
    data: MultipleChoiceQuestionResponseUpdateWithoutStudentDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type MultipleChoiceQuestionResponseUpdateWithoutStudentDataInput = {
    choice?: MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutResponsesInput | null;
};
export type MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput = {
    connect?: MultipleChoiceQuestionChoiceWhereUniqueInput | null;
    create?: MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionResponsesInput | null;
    update?: MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionResponsesDataInput | null;
    upsert?: MultipleChoiceQuestionChoiceUpsertWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionResponsesDataInput = {
    correct?: boolean | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutChoicesInput | null;
    text?: string | null;
};
export type MultipleChoiceQuestionBlockUpdateOneWithoutChoicesInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutChoicesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: MultipleChoiceQuestionBlockUpdateWithoutChoicesDataInput | null;
    upsert?: MultipleChoiceQuestionBlockUpsertWithoutChoicesInput | null;
};
export type MultipleChoiceQuestionBlockUpdateWithoutChoicesDataInput = {
    blocks?: BlockUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    responses?: MultipleChoiceQuestionResponseUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    text?: string | null;
};
export type BlockUpdateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<BlockWhereUniqueInput> | null;
    create?: Array<BlockCreateWithoutMultipleChoiceQuestionBlockInput> | null;
    delete?: Array<BlockWhereUniqueInput> | null;
    deleteMany?: Array<BlockScalarWhereInput> | null;
    disconnect?: Array<BlockWhereUniqueInput> | null;
    set?: Array<BlockWhereUniqueInput> | null;
    update?: Array<BlockUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
    updateMany?: Array<BlockUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<BlockUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type BlockScalarWhereInput = {
    AND?: Array<BlockScalarWhereInput> | null;
    halfSlides?: HalfSlideFilter | null;
    halfSlidesImplementing?: HalfSlideFilter | null;
    id?: StringFilter | null;
    NOT?: Array<BlockScalarWhereInput> | null;
    OR?: Array<BlockScalarWhereInput> | null;
    quarterSlides?: QuarterSlideFilter | null;
    quarterSlidesImplementing?: QuarterSlideFilter | null;
    singleSlides?: SingleSlideFilter | null;
};
export type BlockUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    data: BlockUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: BlockWhereUniqueInput;
};
export type BlockUpdateWithoutMultipleChoiceQuestionBlockDataInput = {
    halfSlides?: HalfSlideUpdateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideUpdateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    quarterSlides?: QuarterSlideUpdateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideUpdateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideUpdateManyWithoutBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type HalfSlideUpdateManyWithoutFirstHalfBlockInput = {
    connect?: Array<HalfSlideWhereUniqueInput> | null;
    create?: Array<HalfSlideCreateWithoutFirstHalfBlockInput> | null;
    delete?: Array<HalfSlideWhereUniqueInput> | null;
    deleteMany?: Array<HalfSlideScalarWhereInput> | null;
    disconnect?: Array<HalfSlideWhereUniqueInput> | null;
    set?: Array<HalfSlideWhereUniqueInput> | null;
    update?: Array<HalfSlideUpdateWithWhereUniqueWithoutFirstHalfBlockInput> | null;
    updateMany?: Array<HalfSlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<HalfSlideUpsertWithWhereUniqueWithoutFirstHalfBlockInput> | null;
};
export type HalfSlideUpdateWithWhereUniqueWithoutFirstHalfBlockInput = {
    data: HalfSlideUpdateWithoutFirstHalfBlockDataInput;
    where: HalfSlideWhereUniqueInput;
};
export type HalfSlideUpdateWithoutFirstHalfBlockDataInput = {
    id?: string | null;
    secondHalfBlock?: BlockUpdateOneRequiredWithoutHalfSlidesImplementingInput | null;
    slides?: SlideUpdateManyWithoutHalfSlideInput | null;
};
export type BlockUpdateOneRequiredWithoutHalfSlidesImplementingInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutHalfSlidesImplementingInput | null;
    update?: BlockUpdateWithoutHalfSlidesImplementingDataInput | null;
    upsert?: BlockUpsertWithoutHalfSlidesImplementingInput | null;
};
export type BlockUpdateWithoutHalfSlidesImplementingDataInput = {
    halfSlides?: HalfSlideUpdateManyWithoutFirstHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideUpdateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideUpdateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideUpdateManyWithoutBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutBlocksInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: MultipleChoiceQuestionBlockUpdateWithoutBlocksDataInput | null;
    upsert?: MultipleChoiceQuestionBlockUpsertWithoutBlocksInput | null;
};
export type MultipleChoiceQuestionBlockUpdateWithoutBlocksDataInput = {
    choices?: MultipleChoiceQuestionChoiceUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    responses?: MultipleChoiceQuestionResponseUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    text?: string | null;
};
export type MultipleChoiceQuestionChoiceUpdateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionBlockInput> | null;
    delete?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput> | null;
    deleteMany?: Array<MultipleChoiceQuestionChoiceScalarWhereInput> | null;
    disconnect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput> | null;
    set?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput> | null;
    update?: Array<MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
    updateMany?: Array<MultipleChoiceQuestionChoiceUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type MultipleChoiceQuestionChoiceScalarWhereInput = {
    AND?: Array<MultipleChoiceQuestionChoiceScalarWhereInput> | null;
    correct?: BooleanFilter | null;
    id?: StringFilter | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseFilter | null;
    NOT?: Array<MultipleChoiceQuestionChoiceScalarWhereInput> | null;
    OR?: Array<MultipleChoiceQuestionChoiceScalarWhereInput> | null;
    text?: StringFilter | null;
};
export type MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    data: MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: MultipleChoiceQuestionChoiceWhereUniqueInput;
};
export type MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionBlockDataInput = {
    correct?: boolean | null;
    id?: string | null;
    multipleChoiceQuestionResponses?: MultipleChoiceQuestionResponseUpdateManyWithoutChoiceInput | null;
    text?: string | null;
};
export type MultipleChoiceQuestionResponseUpdateManyWithoutChoiceInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutChoiceInput> | null;
    delete?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    deleteMany?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
    disconnect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    set?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    update?: Array<MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutChoiceInput> | null;
    updateMany?: Array<MultipleChoiceQuestionResponseUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutChoiceInput> | null;
};
export type MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutChoiceInput = {
    data: MultipleChoiceQuestionResponseUpdateWithoutChoiceDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type MultipleChoiceQuestionResponseUpdateWithoutChoiceDataInput = {
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutResponsesInput | null;
    student?: StudentUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type MultipleChoiceQuestionBlockUpdateOneWithoutResponsesInput = {
    connect?: MultipleChoiceQuestionBlockWhereUniqueInput | null;
    create?: MultipleChoiceQuestionBlockCreateWithoutResponsesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: MultipleChoiceQuestionBlockUpdateWithoutResponsesDataInput | null;
    upsert?: MultipleChoiceQuestionBlockUpsertWithoutResponsesInput | null;
};
export type MultipleChoiceQuestionBlockUpdateWithoutResponsesDataInput = {
    blocks?: BlockUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    choices?: MultipleChoiceQuestionChoiceUpdateManyWithoutMultipleChoiceQuestionBlockInput | null;
    id?: string | null;
    text?: string | null;
};
export type MultipleChoiceQuestionBlockUpsertWithoutResponsesInput = {
    create: MultipleChoiceQuestionBlockCreateWithoutResponsesInput;
    update: MultipleChoiceQuestionBlockUpdateWithoutResponsesDataInput;
};
export type StudentUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput = {
    connect?: StudentWhereUniqueInput | null;
    create?: StudentCreateWithoutMultipleChoiceQuestionResponsesInput | null;
    update?: StudentUpdateWithoutMultipleChoiceQuestionResponsesDataInput | null;
    upsert?: StudentUpsertWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type StudentUpdateWithoutMultipleChoiceQuestionResponsesDataInput = {
    courses?: CourseUpdateManyWithoutStudentsInput | null;
    createdAt?: unknown | null;
    gradeLevel?: GradeLevel | null;
    guardians?: GuardianUpdateManyWithoutStudentsInput | null;
    id?: string | null;
    user?: UserUpdateOneRequiredWithoutStudentInput | null;
};
export type UserUpdateOneRequiredWithoutStudentInput = {
    connect?: UserWhereUniqueInput | null;
    create?: UserCreateWithoutStudentInput | null;
    update?: UserUpdateWithoutStudentDataInput | null;
    upsert?: UserUpsertWithoutStudentInput | null;
};
export type UserUpdateWithoutStudentDataInput = {
    admin?: AdminUpdateOneWithoutUserInput | null;
    firstName?: string | null;
    guardian?: GuardianUpdateOneWithoutUserInput | null;
    id?: string | null;
    instructor?: InstructorUpdateOneWithoutUserInput | null;
    lastName?: string | null;
    password?: string | null;
    username?: string | null;
};
export type UserUpsertWithoutStudentInput = {
    create: UserCreateWithoutStudentInput;
    update: UserUpdateWithoutStudentDataInput;
};
export type StudentUpsertWithoutMultipleChoiceQuestionResponsesInput = {
    create: StudentCreateWithoutMultipleChoiceQuestionResponsesInput;
    update: StudentUpdateWithoutMultipleChoiceQuestionResponsesDataInput;
};
export type MultipleChoiceQuestionResponseUpdateManyWithWhereNestedInput = {
    data: MultipleChoiceQuestionResponseUpdateManyDataInput;
    where: MultipleChoiceQuestionResponseScalarWhereInput;
};
export type MultipleChoiceQuestionResponseUpdateManyDataInput = {
    id?: string | null;
};
export type MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutChoiceInput = {
    create: MultipleChoiceQuestionResponseCreateWithoutChoiceInput;
    update: MultipleChoiceQuestionResponseUpdateWithoutChoiceDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type MultipleChoiceQuestionChoiceUpdateManyWithWhereNestedInput = {
    data: MultipleChoiceQuestionChoiceUpdateManyDataInput;
    where: MultipleChoiceQuestionChoiceScalarWhereInput;
};
export type MultipleChoiceQuestionChoiceUpdateManyDataInput = {
    correct?: boolean | null;
    id?: string | null;
    text?: string | null;
};
export type MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    create: MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionBlockInput;
    update: MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: MultipleChoiceQuestionChoiceWhereUniqueInput;
};
export type MultipleChoiceQuestionResponseUpdateManyWithoutMultipleChoiceQuestionBlockInput = {
    connect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    create?: Array<MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput> | null;
    delete?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    deleteMany?: Array<MultipleChoiceQuestionResponseScalarWhereInput> | null;
    disconnect?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    set?: Array<MultipleChoiceQuestionResponseWhereUniqueInput> | null;
    update?: Array<MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
    updateMany?: Array<MultipleChoiceQuestionResponseUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput> | null;
};
export type MultipleChoiceQuestionResponseUpdateWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    data: MultipleChoiceQuestionResponseUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type MultipleChoiceQuestionResponseUpdateWithoutMultipleChoiceQuestionBlockDataInput = {
    choice?: MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput | null;
    id?: string | null;
    student?: StudentUpdateOneRequiredWithoutMultipleChoiceQuestionResponsesInput | null;
};
export type MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    create: MultipleChoiceQuestionResponseCreateWithoutMultipleChoiceQuestionBlockInput;
    update: MultipleChoiceQuestionResponseUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type MultipleChoiceQuestionBlockUpsertWithoutBlocksInput = {
    create: MultipleChoiceQuestionBlockCreateWithoutBlocksInput;
    update: MultipleChoiceQuestionBlockUpdateWithoutBlocksDataInput;
};
export type QuarterSlideUpdateManyWithoutMainBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutMainBlockInput> | null;
    delete?: Array<QuarterSlideWhereUniqueInput> | null;
    deleteMany?: Array<QuarterSlideScalarWhereInput> | null;
    disconnect?: Array<QuarterSlideWhereUniqueInput> | null;
    set?: Array<QuarterSlideWhereUniqueInput> | null;
    update?: Array<QuarterSlideUpdateWithWhereUniqueWithoutMainBlockInput> | null;
    updateMany?: Array<QuarterSlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<QuarterSlideUpsertWithWhereUniqueWithoutMainBlockInput> | null;
};
export type QuarterSlideScalarWhereInput = {
    AND?: Array<QuarterSlideScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<QuarterSlideScalarWhereInput> | null;
    OR?: Array<QuarterSlideScalarWhereInput> | null;
    slides?: SlideFilter | null;
};
export type QuarterSlideUpdateWithWhereUniqueWithoutMainBlockInput = {
    data: QuarterSlideUpdateWithoutMainBlockDataInput;
    where: QuarterSlideWhereUniqueInput;
};
export type QuarterSlideUpdateWithoutMainBlockDataInput = {
    id?: string | null;
    sideBlock?: BlockUpdateOneRequiredWithoutQuarterSlidesImplementingInput | null;
    slides?: SlideUpdateManyWithoutQuarterSlideInput | null;
};
export type BlockUpdateOneRequiredWithoutQuarterSlidesImplementingInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutQuarterSlidesImplementingInput | null;
    update?: BlockUpdateWithoutQuarterSlidesImplementingDataInput | null;
    upsert?: BlockUpsertWithoutQuarterSlidesImplementingInput | null;
};
export type BlockUpdateWithoutQuarterSlidesImplementingDataInput = {
    halfSlides?: HalfSlideUpdateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideUpdateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideUpdateManyWithoutMainBlockInput | null;
    singleSlides?: SingleSlideUpdateManyWithoutBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type SingleSlideUpdateManyWithoutBlockInput = {
    connect?: Array<SingleSlideWhereUniqueInput> | null;
    create?: Array<SingleSlideCreateWithoutBlockInput> | null;
    delete?: Array<SingleSlideWhereUniqueInput> | null;
    deleteMany?: Array<SingleSlideScalarWhereInput> | null;
    disconnect?: Array<SingleSlideWhereUniqueInput> | null;
    set?: Array<SingleSlideWhereUniqueInput> | null;
    update?: Array<SingleSlideUpdateWithWhereUniqueWithoutBlockInput> | null;
    updateMany?: Array<SingleSlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<SingleSlideUpsertWithWhereUniqueWithoutBlockInput> | null;
};
export type SingleSlideScalarWhereInput = {
    AND?: Array<SingleSlideScalarWhereInput> | null;
    id?: StringFilter | null;
    NOT?: Array<SingleSlideScalarWhereInput> | null;
    OR?: Array<SingleSlideScalarWhereInput> | null;
    slides?: SlideFilter | null;
};
export type SingleSlideUpdateWithWhereUniqueWithoutBlockInput = {
    data: SingleSlideUpdateWithoutBlockDataInput;
    where: SingleSlideWhereUniqueInput;
};
export type SingleSlideUpdateWithoutBlockDataInput = {
    id?: string | null;
    slides?: SlideUpdateManyWithoutSingleSlideInput | null;
};
export type SlideUpdateManyWithoutSingleSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutSingleSlideInput> | null;
    delete?: Array<SlideWhereUniqueInput> | null;
    deleteMany?: Array<SlideScalarWhereInput> | null;
    disconnect?: Array<SlideWhereUniqueInput> | null;
    set?: Array<SlideWhereUniqueInput> | null;
    update?: Array<SlideUpdateWithWhereUniqueWithoutSingleSlideInput> | null;
    updateMany?: Array<SlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<SlideUpsertWithWhereUniqueWithoutSingleSlideInput> | null;
};
export type SlideUpdateWithWhereUniqueWithoutSingleSlideInput = {
    data: SlideUpdateWithoutSingleSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type SlideUpdateWithoutSingleSlideDataInput = {
    halfSlide?: HalfSlideUpdateOneWithoutSlidesInput | null;
    id?: string | null;
    lesson?: LessonUpdateOneWithoutSlidesInput | null;
    quarterSlide?: QuarterSlideUpdateOneWithoutSlidesInput | null;
    title?: string | null;
};
export type QuarterSlideUpdateOneWithoutSlidesInput = {
    connect?: QuarterSlideWhereUniqueInput | null;
    create?: QuarterSlideCreateWithoutSlidesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: QuarterSlideUpdateWithoutSlidesDataInput | null;
    upsert?: QuarterSlideUpsertWithoutSlidesInput | null;
};
export type QuarterSlideUpdateWithoutSlidesDataInput = {
    id?: string | null;
    mainBlock?: BlockUpdateOneRequiredWithoutQuarterSlidesInput | null;
    sideBlock?: BlockUpdateOneRequiredWithoutQuarterSlidesImplementingInput | null;
};
export type BlockUpdateOneRequiredWithoutQuarterSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutQuarterSlidesInput | null;
    update?: BlockUpdateWithoutQuarterSlidesDataInput | null;
    upsert?: BlockUpsertWithoutQuarterSlidesInput | null;
};
export type BlockUpdateWithoutQuarterSlidesDataInput = {
    halfSlides?: HalfSlideUpdateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideUpdateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput | null;
    quarterSlidesImplementing?: QuarterSlideUpdateManyWithoutSideBlockInput | null;
    singleSlides?: SingleSlideUpdateManyWithoutBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type QuarterSlideUpdateManyWithoutSideBlockInput = {
    connect?: Array<QuarterSlideWhereUniqueInput> | null;
    create?: Array<QuarterSlideCreateWithoutSideBlockInput> | null;
    delete?: Array<QuarterSlideWhereUniqueInput> | null;
    deleteMany?: Array<QuarterSlideScalarWhereInput> | null;
    disconnect?: Array<QuarterSlideWhereUniqueInput> | null;
    set?: Array<QuarterSlideWhereUniqueInput> | null;
    update?: Array<QuarterSlideUpdateWithWhereUniqueWithoutSideBlockInput> | null;
    updateMany?: Array<QuarterSlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<QuarterSlideUpsertWithWhereUniqueWithoutSideBlockInput> | null;
};
export type QuarterSlideUpdateWithWhereUniqueWithoutSideBlockInput = {
    data: QuarterSlideUpdateWithoutSideBlockDataInput;
    where: QuarterSlideWhereUniqueInput;
};
export type QuarterSlideUpdateWithoutSideBlockDataInput = {
    id?: string | null;
    mainBlock?: BlockUpdateOneRequiredWithoutQuarterSlidesInput | null;
    slides?: SlideUpdateManyWithoutQuarterSlideInput | null;
};
export type SlideUpdateManyWithoutQuarterSlideInput = {
    connect?: Array<SlideWhereUniqueInput> | null;
    create?: Array<SlideCreateWithoutQuarterSlideInput> | null;
    delete?: Array<SlideWhereUniqueInput> | null;
    deleteMany?: Array<SlideScalarWhereInput> | null;
    disconnect?: Array<SlideWhereUniqueInput> | null;
    set?: Array<SlideWhereUniqueInput> | null;
    update?: Array<SlideUpdateWithWhereUniqueWithoutQuarterSlideInput> | null;
    updateMany?: Array<SlideUpdateManyWithWhereNestedInput> | null;
    upsert?: Array<SlideUpsertWithWhereUniqueWithoutQuarterSlideInput> | null;
};
export type SlideUpdateWithWhereUniqueWithoutQuarterSlideInput = {
    data: SlideUpdateWithoutQuarterSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type SlideUpdateWithoutQuarterSlideDataInput = {
    halfSlide?: HalfSlideUpdateOneWithoutSlidesInput | null;
    id?: string | null;
    lesson?: LessonUpdateOneWithoutSlidesInput | null;
    singleSlide?: SingleSlideUpdateOneWithoutSlidesInput | null;
    title?: string | null;
};
export type SingleSlideUpdateOneWithoutSlidesInput = {
    connect?: SingleSlideWhereUniqueInput | null;
    create?: SingleSlideCreateWithoutSlidesInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: SingleSlideUpdateWithoutSlidesDataInput | null;
    upsert?: SingleSlideUpsertWithoutSlidesInput | null;
};
export type SingleSlideUpdateWithoutSlidesDataInput = {
    block?: BlockUpdateOneRequiredWithoutSingleSlidesInput | null;
    id?: string | null;
};
export type BlockUpdateOneRequiredWithoutSingleSlidesInput = {
    connect?: BlockWhereUniqueInput | null;
    create?: BlockCreateWithoutSingleSlidesInput | null;
    update?: BlockUpdateWithoutSingleSlidesDataInput | null;
    upsert?: BlockUpsertWithoutSingleSlidesInput | null;
};
export type BlockUpdateWithoutSingleSlidesDataInput = {
    halfSlides?: HalfSlideUpdateManyWithoutFirstHalfBlockInput | null;
    halfSlidesImplementing?: HalfSlideUpdateManyWithoutSecondHalfBlockInput | null;
    id?: string | null;
    multipleChoiceQuestionBlock?: MultipleChoiceQuestionBlockUpdateOneWithoutBlocksInput | null;
    quarterSlides?: QuarterSlideUpdateManyWithoutMainBlockInput | null;
    quarterSlidesImplementing?: QuarterSlideUpdateManyWithoutSideBlockInput | null;
    textBlock?: TextBlockUpdateOneWithoutBlocksInput | null;
};
export type TextBlockUpdateOneWithoutBlocksInput = {
    connect?: TextBlockWhereUniqueInput | null;
    create?: TextBlockCreateWithoutBlocksInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    update?: TextBlockUpdateWithoutBlocksDataInput | null;
    upsert?: TextBlockUpsertWithoutBlocksInput | null;
};
export type TextBlockUpdateWithoutBlocksDataInput = {
    body?: string | null;
    id?: string | null;
    title?: string | null;
};
export type TextBlockUpsertWithoutBlocksInput = {
    create: TextBlockCreateWithoutBlocksInput;
    update: TextBlockUpdateWithoutBlocksDataInput;
};
export type BlockUpsertWithoutSingleSlidesInput = {
    create: BlockCreateWithoutSingleSlidesInput;
    update: BlockUpdateWithoutSingleSlidesDataInput;
};
export type SingleSlideUpsertWithoutSlidesInput = {
    create: SingleSlideCreateWithoutSlidesInput;
    update: SingleSlideUpdateWithoutSlidesDataInput;
};
export type SlideUpdateManyWithWhereNestedInput = {
    data: SlideUpdateManyDataInput;
    where: SlideScalarWhereInput;
};
export type SlideUpdateManyDataInput = {
    id?: string | null;
    title?: string | null;
};
export type SlideUpsertWithWhereUniqueWithoutQuarterSlideInput = {
    create: SlideCreateWithoutQuarterSlideInput;
    update: SlideUpdateWithoutQuarterSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type QuarterSlideUpdateManyWithWhereNestedInput = {
    data: QuarterSlideUpdateManyDataInput;
    where: QuarterSlideScalarWhereInput;
};
export type QuarterSlideUpdateManyDataInput = {
    id?: string | null;
};
export type QuarterSlideUpsertWithWhereUniqueWithoutSideBlockInput = {
    create: QuarterSlideCreateWithoutSideBlockInput;
    update: QuarterSlideUpdateWithoutSideBlockDataInput;
    where: QuarterSlideWhereUniqueInput;
};
export type BlockUpsertWithoutQuarterSlidesInput = {
    create: BlockCreateWithoutQuarterSlidesInput;
    update: BlockUpdateWithoutQuarterSlidesDataInput;
};
export type QuarterSlideUpsertWithoutSlidesInput = {
    create: QuarterSlideCreateWithoutSlidesInput;
    update: QuarterSlideUpdateWithoutSlidesDataInput;
};
export type SlideUpsertWithWhereUniqueWithoutSingleSlideInput = {
    create: SlideCreateWithoutSingleSlideInput;
    update: SlideUpdateWithoutSingleSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type SingleSlideUpdateManyWithWhereNestedInput = {
    data: SingleSlideUpdateManyDataInput;
    where: SingleSlideScalarWhereInput;
};
export type SingleSlideUpdateManyDataInput = {
    id?: string | null;
};
export type SingleSlideUpsertWithWhereUniqueWithoutBlockInput = {
    create: SingleSlideCreateWithoutBlockInput;
    update: SingleSlideUpdateWithoutBlockDataInput;
    where: SingleSlideWhereUniqueInput;
};
export type BlockUpsertWithoutQuarterSlidesImplementingInput = {
    create: BlockCreateWithoutQuarterSlidesImplementingInput;
    update: BlockUpdateWithoutQuarterSlidesImplementingDataInput;
};
export type QuarterSlideUpsertWithWhereUniqueWithoutMainBlockInput = {
    create: QuarterSlideCreateWithoutMainBlockInput;
    update: QuarterSlideUpdateWithoutMainBlockDataInput;
    where: QuarterSlideWhereUniqueInput;
};
export type BlockUpsertWithoutHalfSlidesImplementingInput = {
    create: BlockCreateWithoutHalfSlidesImplementingInput;
    update: BlockUpdateWithoutHalfSlidesImplementingDataInput;
};
export type HalfSlideUpdateManyWithWhereNestedInput = {
    data: HalfSlideUpdateManyDataInput;
    where: HalfSlideScalarWhereInput;
};
export type HalfSlideUpdateManyDataInput = {
    id?: string | null;
};
export type HalfSlideUpsertWithWhereUniqueWithoutFirstHalfBlockInput = {
    create: HalfSlideCreateWithoutFirstHalfBlockInput;
    update: HalfSlideUpdateWithoutFirstHalfBlockDataInput;
    where: HalfSlideWhereUniqueInput;
};
export type BlockUpdateManyWithWhereNestedInput = {
    data: BlockUpdateManyDataInput;
    where: BlockScalarWhereInput;
};
export type BlockUpdateManyDataInput = {
    id?: string | null;
};
export type BlockUpsertWithWhereUniqueWithoutMultipleChoiceQuestionBlockInput = {
    create: BlockCreateWithoutMultipleChoiceQuestionBlockInput;
    update: BlockUpdateWithoutMultipleChoiceQuestionBlockDataInput;
    where: BlockWhereUniqueInput;
};
export type MultipleChoiceQuestionBlockUpsertWithoutChoicesInput = {
    create: MultipleChoiceQuestionBlockCreateWithoutChoicesInput;
    update: MultipleChoiceQuestionBlockUpdateWithoutChoicesDataInput;
};
export type MultipleChoiceQuestionChoiceUpsertWithoutMultipleChoiceQuestionResponsesInput = {
    create: MultipleChoiceQuestionChoiceCreateWithoutMultipleChoiceQuestionResponsesInput;
    update: MultipleChoiceQuestionChoiceUpdateWithoutMultipleChoiceQuestionResponsesDataInput;
};
export type MultipleChoiceQuestionResponseUpsertWithWhereUniqueWithoutStudentInput = {
    create: MultipleChoiceQuestionResponseCreateWithoutStudentInput;
    update: MultipleChoiceQuestionResponseUpdateWithoutStudentDataInput;
    where: MultipleChoiceQuestionResponseWhereUniqueInput;
};
export type StudentUpsertWithoutUserInput = {
    create: StudentCreateWithoutUserInput;
    update: StudentUpdateWithoutUserDataInput;
};
export type UserUpsertWithoutGuardianInput = {
    create: UserCreateWithoutGuardianInput;
    update: UserUpdateWithoutGuardianDataInput;
};
export type GuardianUpdateManyWithWhereNestedInput = {
    data: GuardianUpdateManyDataInput;
    where: GuardianScalarWhereInput;
};
export type GuardianUpdateManyDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
};
export type GuardianUpsertWithWhereUniqueWithoutStudentsInput = {
    create: GuardianCreateWithoutStudentsInput;
    update: GuardianUpdateWithoutStudentsDataInput;
    where: GuardianWhereUniqueInput;
};
export type StudentUpdateManyWithWhereNestedInput = {
    data: StudentUpdateManyDataInput;
    where: StudentScalarWhereInput;
};
export type StudentUpdateManyDataInput = {
    createdAt?: unknown | null;
    gradeLevel?: GradeLevel | null;
    id?: string | null;
};
export type StudentUpsertWithWhereUniqueWithoutCoursesInput = {
    create: StudentCreateWithoutCoursesInput;
    update: StudentUpdateWithoutCoursesDataInput;
    where: StudentWhereUniqueInput;
};
export type CourseUpsertWithoutLessonPlanInput = {
    create: CourseCreateWithoutLessonPlanInput;
    update: CourseUpdateWithoutLessonPlanDataInput;
};
export type LessonPlanUpsertWithoutLessonsInput = {
    create: LessonPlanCreateWithoutLessonsInput;
    update: LessonPlanUpdateWithoutLessonsDataInput;
};
export type LessonUpsertWithoutSlidesInput = {
    create: LessonCreateWithoutSlidesInput;
    update: LessonUpdateWithoutSlidesDataInput;
};
export type SlideUpsertWithWhereUniqueWithoutHalfSlideInput = {
    create: SlideCreateWithoutHalfSlideInput;
    update: SlideUpdateWithoutHalfSlideDataInput;
    where: SlideWhereUniqueInput;
};
export type HalfSlideUpsertWithWhereUniqueWithoutSecondHalfBlockInput = {
    create: HalfSlideCreateWithoutSecondHalfBlockInput;
    update: HalfSlideUpdateWithoutSecondHalfBlockDataInput;
    where: HalfSlideWhereUniqueInput;
};
export type BlockUpsertWithoutHalfSlidesInput = {
    create: BlockCreateWithoutHalfSlidesInput;
    update: BlockUpdateWithoutHalfSlidesDataInput;
};
export type HalfSlideUpsertWithoutSlidesInput = {
    create: HalfSlideCreateWithoutSlidesInput;
    update: HalfSlideUpdateWithoutSlidesDataInput;
};
export type SlideUpsertWithWhereUniqueWithoutLessonInput = {
    create: SlideCreateWithoutLessonInput;
    update: SlideUpdateWithoutLessonDataInput;
    where: SlideWhereUniqueInput;
};
export type LessonUpdateManyWithWhereNestedInput = {
    data: LessonUpdateManyDataInput;
    where: LessonScalarWhereInput;
};
export type LessonUpdateManyDataInput = {
    id?: string | null;
    title?: string | null;
};
export type LessonUpsertWithWhereUniqueWithoutLessonPlanInput = {
    create: LessonCreateWithoutLessonPlanInput;
    update: LessonUpdateWithoutLessonPlanDataInput;
    where: LessonWhereUniqueInput;
};
export type LessonPlanUpsertWithoutCourseInput = {
    create: LessonPlanCreateWithoutCourseInput;
    update: LessonPlanUpdateWithoutCourseDataInput;
};
export type CourseUpsertWithWhereUniqueWithoutStudentsInput = {
    create: CourseCreateWithoutStudentsInput;
    update: CourseUpdateWithoutStudentsDataInput;
    where: CourseWhereUniqueInput;
};
export type StudentUpsertWithWhereUniqueWithoutGuardiansInput = {
    create: StudentCreateWithoutGuardiansInput;
    update: StudentUpdateWithoutGuardiansDataInput;
    where: StudentWhereUniqueInput;
};
export type GuardianUpsertWithoutUserInput = {
    create: GuardianCreateWithoutUserInput;
    update: GuardianUpdateWithoutUserDataInput;
};
export type UserUpsertWithoutInstructorInput = {
    create: UserCreateWithoutInstructorInput;
    update: UserUpdateWithoutInstructorDataInput;
};
export type InstructorUpdateManyWithWhereNestedInput = {
    data: InstructorUpdateManyDataInput;
    where: InstructorScalarWhereInput;
};
export type InstructorUpdateManyDataInput = {
    createdAt?: unknown | null;
    email?: string | null;
    id?: string | null;
};
export type InstructorUpsertWithWhereUniqueWithoutCoursesInput = {
    create: InstructorCreateWithoutCoursesInput;
    update: InstructorUpdateWithoutCoursesDataInput;
    where: InstructorWhereUniqueInput;
};
export type UpdateOneCourseMutationVariables = {
    data: CourseUpdateInput;
    where: CourseWhereUniqueInput;
};
export type UpdateOneCourseMutationResponse = {
    readonly updateOneCourse: {
        readonly " $fragmentRefs": FragmentRefs<"EditCourse_course">;
    } | null;
};
export type UpdateOneCourseMutation = {
    readonly response: UpdateOneCourseMutationResponse;
    readonly variables: UpdateOneCourseMutationVariables;
};



/*
mutation UpdateOneCourseMutation(
  $data: CourseUpdateInput!
  $where: CourseWhereUniqueInput!
) {
  updateOneCourse(data: $data, where: $where) {
    ...EditCourse_course
  }
}

fragment EditCourseDetails_course on Course {
  id
}

fragment EditCourseLessonPlan_lessonPlan on LessonPlan {
  id
  lessons {
    id
  }
  ...LessonPlanSidebar_lessonPlan
  ...LessonPlanCatalogue_lessonPlan
}

fragment EditCourseStudents_course on Course {
  id
  students {
    id
  }
  ...StudentsTable_course
}

fragment EditCourse_course on Course {
  ...EditCourseStudents_course
  ...EditCourseDetails_course
  id
  name
  lessonPlan {
    ...EditCourseLessonPlan_lessonPlan
    ...LessonPlanCatalogue_lessonPlan
  }
}

fragment LessonPlanCatalogue_lessonPlan on LessonPlan {
  id
  lessons {
    id
  }
}

fragment LessonPlanSidebar_lessonPlan on LessonPlan {
  id
  lessons {
    id
    title
    slides {
      __typename
      id
    }
  }
}

fragment StudentsTable_course on Course {
  students {
    username
    firstName
    lastName
    gradeLevel
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "CourseUpdateInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "CourseWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateOneCourseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
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
    "name": "UpdateOneCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateOneCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Course",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "students",
            "storageKey": null,
            "args": null,
            "concreteType": "Student",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "firstName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "gradeLevel",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lessonPlan",
            "storageKey": null,
            "args": null,
            "concreteType": "LessonPlan",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lessons",
                "storageKey": null,
                "args": null,
                "concreteType": "Lesson",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateOneCourseMutation",
    "id": null,
    "text": "mutation UpdateOneCourseMutation(\n  $data: CourseUpdateInput!\n  $where: CourseWhereUniqueInput!\n) {\n  updateOneCourse(data: $data, where: $where) {\n    ...EditCourse_course\n  }\n}\n\nfragment EditCourseDetails_course on Course {\n  id\n}\n\nfragment EditCourseLessonPlan_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n  ...LessonPlanSidebar_lessonPlan\n  ...LessonPlanCatalogue_lessonPlan\n}\n\nfragment EditCourseStudents_course on Course {\n  id\n  students {\n    id\n  }\n  ...StudentsTable_course\n}\n\nfragment EditCourse_course on Course {\n  ...EditCourseStudents_course\n  ...EditCourseDetails_course\n  id\n  name\n  lessonPlan {\n    ...EditCourseLessonPlan_lessonPlan\n    ...LessonPlanCatalogue_lessonPlan\n  }\n}\n\nfragment LessonPlanCatalogue_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n  }\n}\n\nfragment LessonPlanSidebar_lessonPlan on LessonPlan {\n  id\n  lessons {\n    id\n    title\n    slides {\n      __typename\n      id\n    }\n  }\n}\n\nfragment StudentsTable_course on Course {\n  students {\n    username\n    firstName\n    lastName\n    gradeLevel\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c8ddbca7dd8a809014a7eed483fbf06d';
export default node;
