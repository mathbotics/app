import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';

import prisma from '../../data/prisma';

export const DeleteStudentInput = inputObjectType({
    name: 'DeleteStudentInput',
    definition(t) {
      t.string('courseId', {
        required: true,
      });
    },
  });
// TODO to get this to actually return
export const deleteStudents = mutationField('deleteStudents', {
    type: "Student",
    args: {
        input: arg({ type: 'DeleteStudentInput', required: true }),
      },
    async resolve(
        _root, { input: { courseId } },
    ) {
      try {
      console.log("About to delete all students")
      // get all students with user information
      const studentsWithUser = await prisma.student.findMany({
        where: {
          courses: {
            every: { id: courseId } },
          },
          include: { user: true },
        });

        console.log(`Deleting ${studentsWithUser.length} students`)

        // delete all students
        const { count } = await prisma.student.deleteMany({
          where: {
            courses: {
              every: { id: courseId } },
            },
          });

          console.log(`Succesfully deleted ${count} students`)

          // delete all users
           studentsWithUser.forEach(async (student) => await prisma.user.delete({
            where: {
              id: student.user.id,
            },
          }))

          console.log("Succesfully deleted all users")

          const response = await prisma.student.findMany({ where: { courses: { every: { id: courseId } } } });

          return [];
        } catch (e) {
          console.log(`Something bad happened when deleting students ${e}`)
          throw e;
        }
      },
});
