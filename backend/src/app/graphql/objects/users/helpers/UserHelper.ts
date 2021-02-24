import nullthrows from 'nullthrows';

import prisma from '../../../../data/prisma';

const possibleImplementations = (id: string, includeUser: boolean = false) =>
  Promise.all([
    prisma.admin.findUnique({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
    prisma.guardian.findUnique({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
    prisma.instructor.findUnique({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
    prisma.student.findUnique({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
  ]);

export default {
  async user(id: string) {
    const { user } = await this.implementation(id, true);
    return user;
  },
  async role(id: string) {
    const [
      admin,
      guardian,
      instructor,
      student,
    ] = await possibleImplementations(id);
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
    throw new Error('Role not implemented');
  },
  async implementation(id: string, includeUser: boolean = false) {
    const [
      admin,
      guardian,
      instructor,
      student,
    ] = await possibleImplementations(id, includeUser);
    return nullthrows(
      admin ?? guardian ?? instructor ?? student,
      'User not found',
    );
  },
};
