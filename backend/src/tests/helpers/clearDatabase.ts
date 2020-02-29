import prisma from '../../app/data/prisma';

export default async () => {
  await Promise.all([
    prisma.admin.deleteMany({}),
    prisma.guardian.deleteMany({}),
    prisma.instructor.deleteMany({}),
    prisma.student.deleteMany({}),
    prisma.course.deleteMany({}),
    prisma.content.deleteMany({}),
  ]);
  await prisma.user.deleteMany({});
};
