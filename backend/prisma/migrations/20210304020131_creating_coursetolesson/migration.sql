/*
  Warnings:

  - The migration will change the primary key for the `CourseToStudent` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `grade` on the `CourseToStudent` table. All the data in the column will be lost.
  - You are about to drop the column `lessonId` on the `CourseToStudent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseToStudent" DROP CONSTRAINT "CourseToStudent_lessonId_fkey";

-- AlterTable
ALTER TABLE "CourseToStudent" DROP CONSTRAINT "CourseToStudent_pkey",
DROP COLUMN "grade",
DROP COLUMN "lessonId",
ADD PRIMARY KEY ("courseId", "studentId");

-- CreateTable
CREATE TABLE "CourseToLesson" (
    "courseId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,

    PRIMARY KEY ("courseId","lessonId")
);

-- AddForeignKey
ALTER TABLE "CourseToLesson" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseToLesson" ADD FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
