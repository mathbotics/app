import { Admin, Guardian, Instructor, Student } from '@prisma/client';
import nullthrows from 'nullthrows';

import prisma from '../../../data/prisma';

export default {
  async user(username: string) {
    const { admin, guardian, instructor, student, ...user } = nullthrows(
      await prisma.user.findOne({
        where: { username },
        include: {
          admin: true,
          guardian: true,
          instructor: true,
          student: true,
        },
      }),
    );
    return {
      ...user,
      ...nullthrows(admin ?? guardian ?? instructor ?? student),
    };
  },
  async role(username: string) {
    const { admin, guardian, instructor, student } = await nullthrows(
      await prisma.user.findOne({
        where: { username },
        include: {
          admin: true,
          guardian: true,
          instructor: true,
          student: true,
        },
      }),
    );
    if (admin) {
      return 'Admin';
    }
    if (guardian) {
      return 'Guardian';
    }
    if (instructor) {
      return 'Instructor';
    }
    if (student) {
      return 'Student';
    }
    return null;
  },
  async implementation(
    username: string,
  ): Promise<Admin | Guardian | Instructor | Student | null> {
    const { admin, guardian, instructor, student } = await nullthrows(
      await prisma.user.findOne({
        where: { username },
        include: {
          admin: true,
          guardian: true,
          instructor: true,
          student: true,
        },
      }),
    );
    return admin ?? guardian ?? instructor ?? student;
  },
};
