import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';
import { AdminCreateArgs } from '@prisma/client';

import prisma from '../app/data/prisma';

const create = async (data?: Partial<AdminCreateArgs['data']>) =>
  nullthrows(
    prisma.admin.create({
      data: {
        user: {
          create: {
            instructor: undefined,
            guardian: undefined,
            student: undefined,
            firstName: 'Terry',
            lastName: 'David',
            username: 'admin',
            password: await bcrypt.hash('admin', 10),
          },
        },
        email: 'admin@test.com',
        ...data,
      },
      include: { user: true },
    }),
  );

export default { create };
