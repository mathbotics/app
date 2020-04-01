# Migration `20200401032809-add-correct-to-multiple-choice-question-choice`

This migration has been generated at 4/1/2020, 3:28:09 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."MultipleChoiceQuestionBlock_correctChoice"

ALTER TABLE "public"."MultipleChoiceQuestionBlock" DROP CONSTRAINT IF EXiSTS "MultipleChoiceQuestionBlock_correctChoice_fkey",
DROP COLUMN "correctChoice";

ALTER TABLE "public"."MultipleChoiceQuestionChoice" ADD COLUMN "correct" boolean  NOT NULL DEFAULT false;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200329060657-non-nullable-blocks..20200401032809-add-correct-to-multiple-choice-question-choice
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
@@ -83,10 +83,9 @@
 model MultipleChoiceQuestionBlock {
   id            String                   @id @default(cuid())
   text          String
-  choices       MultipleChoiceQuestionChoice[]   @relation("MultipleChoiceQuestionToAvailableMultipleChoiceQuestionChoice")
-  correctChoice MultipleChoiceQuestionChoice
+  choices       MultipleChoiceQuestionChoice[]
   responses     MultipleChoiceQuestionResponse[]
 }
 model MultipleChoiceQuestionResponse {
@@ -95,11 +94,11 @@
   student Student
 }
 model MultipleChoiceQuestionChoice {
-  id       String                      @id @default(cuid())
-  text     String
-  question MultipleChoiceQuestionBlock
+  id        String                      @id @default(cuid())
+  text      String
+  correct   Boolean
 }
 model Slide {
   id           String        @id @default(cuid())
```


