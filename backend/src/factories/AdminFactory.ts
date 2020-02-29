import bcrypt from 'bcrypt';
import { AdminCreateArgs } from '@prisma/client';

import prisma from '../app/data/prisma';

const create = async (data?: Partial<AdminCreateArgs['data']>) =>
  prisma.admin.create({
    data: {
      user: {
        create: {
          instructor: undefined,
          guardian: undefined,
          student: undefined,
          firstName: 'Test',
          lastName: 'Test',
          username: 'admin',
          password: await bcrypt.hash('testpass', 10),
        },
      },
      email: 'admin@test.com',
      ...data,
    },
  });

export default { create };
