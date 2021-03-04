-- CreateTable
CREATE TABLE "Grade" (
    "courseId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "courseToStudentCourseId" TEXT,
    "courseToStudentStudentId" TEXT,
    "courseToLessonCourseId" TEXT,
    "courseToLessonLessonId" TEXT,

    PRIMARY KEY ("courseId","lessonId","studentId")
);

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("courseToStudentCourseId", "courseToStudentStudentId") REFERENCES "CourseToStudent"("courseId", "studentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD FOREIGN KEY ("courseToLessonCourseId", "courseToLessonLessonId") REFERENCES "CourseToLesson"("courseId", "lessonId") ON DELETE SET NULL ON UPDATE CASCADE;
