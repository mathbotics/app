import nullthrows from 'nullthrows';

import prisma from '../../../../data/prisma';

const possibleImplementations = (id: string, includeUser: boolean = false) =>
  Promise.all([
    prisma.admin.findFirst({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
    prisma.guardian.findFirst({
      where: { userId: id },
      include: {
        user: includeUser,
      },
    }),
    prisma.instructor.findFirst({
      where: { id },
      include: {
        user: includeUser,
      },
    }),
    prisma.student.findFirst({
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
  async implementation(id: string, includeUser: boolean = true) {
    const [
      admin,
      guardian,
      instructor,
      student,
    ] = await possibleImplementations(id, includeUser);

    if(admin){
      const {username, firstName, lastName, password} = admin.user
      return {...admin, username, password, firstName, lastName}
    }

    if(student){
      const {username, firstName, lastName, password} = student.user
      return {...student, username, password, firstName, lastName}
    }

    if(instructor){
      const {username, firstName, lastName, password} = instructor.user
      return {...instructor, username, password, firstName, lastName}
    }
    return nullthrows(
      admin ?? guardian ?? instructor ?? student,
      'User not found',
    );
  },
};
