import prisma from '../../app/data/prisma';

export default async () => {
  await Promise.all([
    prisma.admin.deleteMany({ where: {} }),
    prisma.guardian.deleteMany({ where: {} }),
    prisma.instructor.deleteMany({ where: {} }),
    prisma.student.deleteMany({ where: {} }),
    prisma.course.deleteMany({ where: {} }),
    prisma.content.deleteMany({ where: {} }),
  ]);
  await prisma.user.deleteMany({ where: {} });
};
