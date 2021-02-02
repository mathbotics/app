# Migration `20210128224807-test-student-email`

This migration has been generated at 1/28/2021, 10:48:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "Student.email" ON "public"."Student"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201105185655-student_email_property..20210128224807-test-student-email
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
@@ -51,14 +51,14 @@
 }
 model Student {
   createdAt  DateTime   @default(now())
+  email      String     @unique
   gradeLevel GradeLevel
   id         String     @id @default(cuid())
   guardians  Guardian[]
   courses    Course[]
   user       User
-  email      String
 }
 enum GradeLevel {
   FIRST
```


