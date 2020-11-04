import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import bcrypt from 'bcrypt';
import prisma from '../../data/prisma';
import { Instructor } from '../objects';

export const ResetPasswordInput = inputObjectType({
  name: 'ResetPasswordInput',
  definition(t) {
    t.string('password', {
      required: true,
    });
    t.string('email', {
      required: true,
    });
  },
});

export const resetPassword = mutationField('resetPassword', {
  type: 'User',
  args: {
    input: arg({ type: 'ResetPasswordInput', required: true }),
  },
  async resolve(
    _root,
    { input: { password, email } },
  ) {
    const { user, ...instructor } = nullthrows(
        await prisma.instructor.update({
            where: { email },
            data: {
                user: {
                    update: {
                        password: await bcrypt.hash(password, 10),
                    },
                },
                email: nullthrows(email, 'email is null or undefined'),
            },
            include: { user: true },

        }),

    );
    return { ...user, ...instructor }
    },
})
