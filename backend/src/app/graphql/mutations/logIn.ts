import { AuthenticationError } from 'apollo-server-express';
import { mutationField, inputObjectType, arg } from 'nexus';
import nullthrows from 'nullthrows';
import { compare } from 'bcrypt';

import prisma from '../../data/prisma';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLString } from 'graphql';
import { LoginPayload } from '../payloads/LoginPayload';
import { resolve } from 'path';


export const LoginInput = new GraphQLInputObjectType({
  name: "LoginInput",
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

export const logIn = {
  type: LoginPayload,
  args: {
    input: {
      type: new GraphQLNonNull(LoginInput),
    }
  },
  async resolve(root, args) {
    const {username, password } = args.input;
    try {
      const user = nullthrows(
        await prisma.user.findUnique({
          where: { username },
            include: {
              admin: true,
              guardian: true,
              instructor: true,
              student: true,
            },
          }),
        'User not found',
      );
      const matched = await compare(password, user.password);
      if (!matched) {
        throw new AuthenticationError('Incorrect password.');
      }
      const { admin, guardian, instructor, student } = user;
      console.log(user, " Successfully logged in")
      return nullthrows(
        admin ?? guardian ?? instructor ?? student,
        'User relationship is null.',
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      throw e;
    }
  }
};
// export const LogInInput = inputObjectType({
//   name: 'LogInInput',
//   definition(t) {
//     t.string('username', {
//       required: true,
//     });
//     t.string('password', {
//       required: true,
//     });
//   },
// });

// export const logIn = mutationField('logIn', {
//   type: 'User',
//   args: {
//     input: arg({ type: 'LogInInput', required: true }),
//   },
//   async resolve(_root, { input: { username, password } }) {
//     try {
//       const user = nullthrows(
//         await prisma.user.findOne({
//           where: { username },
//           include: {
//             admin: true,
//             guardian: true,
//             instructor: true,
//             student: true,
//           },
//         }),
//         'User not found',
//       );
//       const matched = await compare(password, user.password);
//       if (!matched) {
//         throw new AuthenticationError('Incorrect password.');
//       }
//       const { admin, guardian, instructor, student } = user;
//       return nullthrows(
//         admin ?? guardian ?? instructor ?? student,
//         'User relationship is null.',
//       );
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.warn(e);
//       throw e;
//     }
//   },
// });
