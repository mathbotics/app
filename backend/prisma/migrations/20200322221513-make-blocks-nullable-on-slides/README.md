# Migration `20200322221513-make-blocks-nullable-on-slides`

This migration has been generated at 3/22/2020, 10:15:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."HalfSlide" DROP CONSTRAINT IF EXiSTS "HalfSlide_firstHalfBlock_fkey",
DROP CONSTRAINT IF EXiSTS "HalfSlide_secondHalfBlock_fkey",
ALTER COLUMN "firstHalfBlock" DROP NOT NULL,
ALTER COLUMN "secondHalfBlock" DROP NOT NULL;

ALTER TABLE "public"."QuarterSlide" DROP CONSTRAINT IF EXiSTS "QuarterSlide_mainBlock_fkey",
DROP CONSTRAINT IF EXiSTS "QuarterSlide_sideBlock_fkey",
ALTER COLUMN "mainBlock" DROP NOT NULL,
ALTER COLUMN "sideBlock" DROP NOT NULL;

ALTER TABLE "public"."SingleSlide" DROP CONSTRAINT IF EXiSTS "SingleSlide_block_fkey",
ALTER COLUMN "block" DROP NOT NULL;

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("firstHalfBlock")REFERENCES "public"."Block"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."HalfSlide" ADD FOREIGN KEY ("secondHalfBlock")REFERENCES "public"."Block"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("mainBlock")REFERENCES "public"."Block"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."QuarterSlide" ADD FOREIGN KEY ("sideBlock")REFERENCES "public"."Block"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."SingleSlide" ADD FOREIGN KEY ("block")REFERENCES "public"."Block"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200316001458-create-lesson-models..20200322221513-make-blocks-nullable-on-slides
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
@@ -109,21 +109,21 @@
 }
 model SingleSlide {
   id    String @id @default(cuid())
-  block Block
+  block Block?
 }
 model QuarterSlide {
   id        String @id @default(cuid())
-  mainBlock Block  @relation("QuarterSlideToMainBlock")
-  sideBlock Block
+  mainBlock Block?  @relation("QuarterSlideToMainBlock")
+  sideBlock Block?
 }
 model HalfSlide {
   id              String @id @default(cuid())
-  firstHalfBlock  Block  @relation("HalfSlideToFirstHalfBlock")
-  secondHalfBlock Block
+  firstHalfBlock  Block?  @relation("HalfSlideToFirstHalfBlock")
+  secondHalfBlock Block?
 }
 model Block {
   id                          String                       @id @default(cuid())
```


