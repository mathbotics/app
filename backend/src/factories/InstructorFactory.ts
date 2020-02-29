import bcrypt from 'bcrypt';
import { InstructorCreateInput } from '@prisma/client';

import prisma from '../app/data/prisma';

const create = async (data?: Partial<InstructorCreateInput>) =>
  prisma.instructor.create({
    data: {
      user: {
        create: {
          admin: undefined,
          guardian: undefined,
          student: undefined,
          firstName: 'Test',
          lastName: 'Test',
          username: 'test',
          password: await bcrypt.hash('testpass', 10),
        },
      },
      email: 'instructor@test.com',
      ...data,
    },
  });

export default { create };
