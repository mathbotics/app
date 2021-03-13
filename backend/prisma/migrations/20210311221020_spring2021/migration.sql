/*
  Warnings:

  - You are about to drop the `_CourseToInstructor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `instructorId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CourseToInstructor" DROP CONSTRAINT "_CourseToInstructor_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToInstructor" DROP CONSTRAINT "_CourseToInstructor_B_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "instructorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CourseToInstructor";

-- AddForeignKey
ALTER TABLE "Course" ADD FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
