import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
//import nullthrows from 'nullthrows';
//import { AdminCreateArgs } from '@prisma/client';

const prisma = new PrismaClient()
async function main() {
  const user = await prisma.admin.create({
    data: {
      user: {
        create: {
          instructor: undefined,
          guardian: undefined,
          student: undefined,
          firstName: 'John',
          lastName: 'Doe',
          username: 'admin',
          password: await bcrypt.hash('admin', 10),
        },
      },
      email: 'admin@test.com'
    },
    include: { user: true },
  });
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })