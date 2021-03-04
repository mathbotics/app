/*
  Warnings:

  - You are about to drop the column `lessonPlanId` on the `Course` table. All the data in the column will be lost.
  - The migration will change the primary key for the `CourseToStudent` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `lessonPlanId` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the `LessonPlan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lessonId` to the `CourseToStudent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Course_lessonPlanId_unique";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_lessonPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_lessonPlanId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "lessonPlanId";

-- AlterTable
ALTER TABLE "CourseToStudent" DROP CONSTRAINT "CourseToStudent_pkey",
ADD COLUMN     "lessonId" TEXT NOT NULL,
ADD PRIMARY KEY ("courseId", "studentId", "lessonId");

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "lessonPlanId";

-- DropTable
DROP TABLE "LessonPlan";

-- AddForeignKey
ALTER TABLE "CourseToStudent" ADD FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
