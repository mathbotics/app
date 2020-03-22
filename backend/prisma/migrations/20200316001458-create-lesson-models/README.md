# Migration `20200316001458-create-lesson-models`

This migration has been generated at 3/16/2020, 12:14:58 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."MultipleChoiceQuestionBlock" (
    "correctChoice" text  NOT NULL ,
    "id" text  NOT NULL ,
    "text" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."MultipleChoiceQuestionResponse" (
    "choice" text  NOT NULL ,
    "id" text  NOT NULL ,
    "multipleChoiceQuestionBlock" text   ,
    "student" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."MultipleChoiceQuestionChoice" (
    "id" text  NOT NULL ,
    "multipleChoiceQuestionBlock" text   ,
    "text" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Slide" (
    "halfSlide" text   ,
    "id" text  NOT NULL ,
    "lesson" text   ,
    "quarterSlide" text   ,
    "singleSlide" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."SingleSlide" (
    "block" text  NOT NULL ,
    "id" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."QuarterSlide" (
    "id" text  NOT NULL ,
    "mainBlock" text  NOT NULL ,
    "sideBlock" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."HalfSlide" (
    "firstHalfBlock" text  NOT NULL ,
    "id" text  NOT NULL ,
    "secondHalfBlock" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Block" (
    "id" text  NOT NULL ,
    "multipleChoiceQuestionBlock" text   ,
    "textBlock" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."TextBlock" (
    "body" text   ,
    "id" text  NOT NULL ,
    "title" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Lesson" (
    "id" text  NOT NULL ,
    "lessonPlan" text   ,
    "title" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."LessonPlan" (
    "id" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

ALTER TABLE "public"."Course" ADD COLUMN "lessonPlan" text  NOT NULL ;

CREATE UNIQUE INDEX "MultipleChoiceQuestionBlock_correctChoice" ON "public"."MultipleChoiceQuestionBlock"("correctChoice")

CREATE UNIQUE INDEX "Course_lessonPlan" ON "public"."Course"("lessonPlan")

ALTER TABLE "public"."MultipleChoiceQuestionBlock" ADD FOREIGN KEY ("correctChoice")REFERENCES "public"."MultipleChoiceQuestionChoice"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."MultipleChoiceQuestionResponse" ADD FOREIGN KEY ("student")REFERENCES "public"."Student"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."MultipleChoiceQuestionResponse" ADD FOREIGN KEY ("multipleChoiceQuestionBlock")REFERENCES "public"."MultipleChoiceQuestionBlock"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."MultipleChoiceQuestionResponse" ADD FOREIGN KEY ("choice")REFERENCES "public"."MultipleChoiceQuestionChoice"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."MultipleChoiceQuestionChoice" ADD FOREIGN KEY ("multipleChoiceQuestionBlock")REFERENCES "public"."MultipleChoiceQuestionBlock"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Slide" ADD FOREIGN KEY ("singleSlide")REFERENCES "public"."SingleSlide"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Slide" ADD FOREIGN KEY ("quarterSlide")REFERENCES "public"."QuarterSlide"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Slide" ADD FOREIGN KEY ("halfSlide")REFERENCES "public"."HalfSlide"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Slide" ADD FOREIGN KEY ("lesson")REFERENCES "public"."Lesson"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."SingleSlide" ADD FOREIGN KEY ("block")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("mainBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("sideBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("firstHalfBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("secondHalfBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."Block" ADD FOREIGN KEY ("multipleChoiceQuestionBlock")REFERENCES "public"."MultipleChoiceQuestionBlock"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Block" ADD FOREIGN KEY ("textBlock")REFERENCES "public"."TextBlock"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Lesson" ADD FOREIGN KEY ("lessonPlan")REFERENCES "public"."LessonPlan"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Course" ADD FOREIGN KEY ("lessonPlan")REFERENCES "public"."LessonPlan"("id") ON DELETE RESTRICT  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200210201051-create-base-schema..20200316001458-create-lesson-models
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model Content {
   author    String
@@ -22,8 +22,9 @@
   suggestedLevel GradeLevel
   students       Student[]
   contents       Content[]
   instructors    Instructor[]
+  lessonPlan     LessonPlan
 }
 model Guardian {
   id        String    @id @default(cuid())
@@ -57,20 +58,9 @@
   user       User
 }
 enum GradeLevel {
-  FIRST
-  SECOND
-  THIRD
-  FOURTH
-  FIFTH
-  SIXTH
-  SEVENTH
-  EIGHTH
-  NINTH
-  TENTH
-  ELEVENTH
-  TWELFTH
+  FIRST SECOND THIRD FOURTH FIFTH SIXTH SEVENTH EIGHTH NINTH TENTH ELEVENTH TWELFTH
 }
 model Admin {
   id        String   @id @default(cuid())
@@ -88,5 +78,75 @@
   admin      Admin?
   guardian   Guardian?
   instructor Instructor?
   student    Student?
+}
+
+model MultipleChoiceQuestionBlock {
+  id            String                   @id @default(cuid())
+  text          String
+  choices       MultipleChoiceQuestionChoice[]   @relation("MultipleChoiceQuestionToAvailableMultipleChoiceQuestionChoice")
+  correctChoice MultipleChoiceQuestionChoice
+  responses     MultipleChoiceQuestionResponse[]
+}
+
+model MultipleChoiceQuestionResponse {
+  id      String               @id @default(cuid())
+  choice  MultipleChoiceQuestionChoice
+  student Student
+}
+
+model MultipleChoiceQuestionChoice {
+  id       String                      @id @default(cuid())
+  text     String
+  question MultipleChoiceQuestionBlock
+}
+
+model Slide {
+  id           String        @id @default(cuid())
+  singleSlide  SingleSlide?
+  quarterSlide QuarterSlide?
+  halfSlide    HalfSlide?
+}
+
+model SingleSlide {
+  id    String @id @default(cuid())
+  block Block
+}
+
+model QuarterSlide {
+  id        String @id @default(cuid())
+  mainBlock Block  @relation("QuarterSlideToMainBlock")
+  sideBlock Block
+}
+
+model HalfSlide {
+  id              String @id @default(cuid())
+  firstHalfBlock  Block  @relation("HalfSlideToFirstHalfBlock")
+  secondHalfBlock Block
+}
+
+model Block {
+  id                          String                       @id @default(cuid())
+  multipleChoiceQuestionBlock MultipleChoiceQuestionBlock?
+  textBlock                   TextBlock?
+  halfSlidesImplementing      HalfSlide[]
+  quarterSlidesImplementing   QuarterSlide[]
+}
+
+model TextBlock {
+  id    String  @id @default(cuid())
+  title String?
+  body  String?
+}
+
+model Lesson {
+  id     String  @id @default(cuid())
+  title  String
+  slides Slide[]
+}
+
+model LessonPlan {
+  id      String   @id @default(cuid())
+  lessons Lesson[]
+  course  Course
 }
```


