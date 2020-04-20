# Migration `20200420023308-update-description-on-course-to-nullable`

This migration has been generated at 4/20/2020, 2:33:08 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Course" ADD COLUMN "description" text   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200420023218-add-description-to-course..20200420023308-update-description-on-course-to-nullable
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
@@ -18,9 +18,9 @@
 model Course {
   createdAt      DateTime     @default(now())
   id             String       @id @default(cuid())
   name           String
-  description    String
+  description    String?
   suggestedLevel GradeLevel
   students       Student[]
   contents       Content[]
   instructors    Instructor[]
```


