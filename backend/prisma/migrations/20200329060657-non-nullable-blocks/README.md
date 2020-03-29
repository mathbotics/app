# Migration `20200329060657-non-nullable-blocks`

This migration has been generated at 3/29/2020, 6:06:57 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."HalfSlide" DROP CONSTRAINT IF EXiSTS "HalfSlide_firstHalfBlock_fkey",
DROP CONSTRAINT IF EXiSTS "HalfSlide_secondHalfBlock_fkey",
DROP COLUMN "firstHalfBlock",
ADD COLUMN "firstHalfBlock" text  NOT NULL ,
DROP COLUMN "secondHalfBlock",
ADD COLUMN "secondHalfBlock" text  NOT NULL ;

ALTER TABLE "public"."QuarterSlide" DROP CONSTRAINT IF EXiSTS "QuarterSlide_mainBlock_fkey",
DROP CONSTRAINT IF EXiSTS "QuarterSlide_sideBlock_fkey",
DROP COLUMN "mainBlock",
ADD COLUMN "mainBlock" text  NOT NULL ,
DROP COLUMN "sideBlock",
ADD COLUMN "sideBlock" text  NOT NULL ;

ALTER TABLE "public"."SingleSlide" DROP CONSTRAINT IF EXiSTS "SingleSlide_block_fkey",
DROP COLUMN "block",
ADD COLUMN "block" text  NOT NULL ;

ALTER TABLE "public"."Slide" ADD COLUMN "title" text  NOT NULL DEFAULT '';

ALTER TABLE "public"."TextBlock" DROP COLUMN "body",
ADD COLUMN "body" text  NOT NULL DEFAULT '',
DROP COLUMN "title",
ADD COLUMN "title" text  NOT NULL DEFAULT '';

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("firstHalfBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("secondHalfBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("mainBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("sideBlock")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE

ALTER TABLE "public"."SingleSlide" ADD FOREIGN KEY ("block")REFERENCES "public"."Block"("id") ON DELETE RESTRICT  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200322221513-make-blocks-nullable-on-slides..20200329060657-non-nullable-blocks
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
@@ -102,28 +102,29 @@
 }
 model Slide {
   id           String        @id @default(cuid())
+  title        String
   singleSlide  SingleSlide?
   quarterSlide QuarterSlide?
   halfSlide    HalfSlide?
 }
 model SingleSlide {
   id    String @id @default(cuid())
-  block Block?
+  block Block
 }
 model QuarterSlide {
   id        String @id @default(cuid())
-  mainBlock Block?  @relation("QuarterSlideToMainBlock")
-  sideBlock Block?
+  mainBlock Block  @relation("QuarterSlideToMainBlock")
+  sideBlock Block
 }
 model HalfSlide {
   id              String @id @default(cuid())
-  firstHalfBlock  Block?  @relation("HalfSlideToFirstHalfBlock")
-  secondHalfBlock Block?
+  firstHalfBlock  Block  @relation("HalfSlideToFirstHalfBlock")
+  secondHalfBlock Block
 }
 model Block {
   id                          String                       @id @default(cuid())
@@ -134,10 +135,10 @@
 }
 model TextBlock {
   id    String  @id @default(cuid())
-  title String?
-  body  String?
+  title String
+  body  String
 }
 model Lesson {
   id     String  @id @default(cuid())
```


