import nullthrows from 'nullthrows';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../data/prisma';
import { Context } from '../context';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { ResetPasswordPayload } from '../payloads/ResetPasswordPayload';
import { resolve } from 'path';
import { User } from '../../server/GraphQLSchema';

const { JWT_SECRET } = process.env;

export const ResetPasswordInput = new GraphQLInputObjectType({
  name: "ResetPasswordInput",
  fields: () => ({
    password: { type: GraphQLString },
    token: { type: GraphQLString }
  })
})

export const resetPassword = {
  type: ResetPasswordPayload,
  args: {
    input: {
      type: new GraphQLNonNull(ResetPasswordInput),
    }
  },
  async resolve(root, args, ctx){
    const { password, token } = args.input
    const { email } = jwt.verify(
            token,
            nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
          ) as { email?: string };
          try {
            const { user, ...instructor } = nullthrows(
              await (ctx as Context).prisma.instructor.update({
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
              'Could not create instructor',
            );
            return { ...user, ...instructor };
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn(e);
            throw e;
          }
  }
}
