/*
  Warnings:

  - You are about to alter the column `grade` on the `Grade` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Grade" ALTER COLUMN "grade" SET DATA TYPE DOUBLE PRECISION;
