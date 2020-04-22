import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';
import { InstructorCreateInput } from '@prisma/client';

import prisma from '../app/data/prisma';

const create = async (data?: Partial<InstructorCreateInput>) =>
  nullthrows(
    prisma.instructor.create({
      data: {
        user: {
          create: {
            admin: undefined,
            guardian: undefined,
            student: undefined,
            firstName: 'Alan',
            lastName: 'Turing',
            username: 'instructor',
            password: await bcrypt.hash('instructor', 10),
          },
        },
        email: 'instructor@test.com',
        ...data,
      },
      include: { user: true },
    }),
  );

export default { create };
