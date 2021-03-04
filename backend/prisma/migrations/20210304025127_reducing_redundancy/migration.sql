/*
  Warnings:

  - You are about to drop the column `courseToStudentCourseId` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `courseToStudentStudentId` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `courseToLessonCourseId` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `courseToLessonLessonId` on the `Grade` table. All the data in the column will be lost.
  - Added the required column `grade` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_courseToLessonCourseId_courseToLessonLessonId_fkey";

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_courseToStudentCourseId_courseToStudentStudentId_fkey";

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "courseToStudentCourseId",
DROP COLUMN "courseToStudentStudentId",
DROP COLUMN "courseToLessonCourseId",
DROP COLUMN "courseToLessonLessonId",
ADD COLUMN     "grade" DECIMAL(65,30) NOT NULL;
