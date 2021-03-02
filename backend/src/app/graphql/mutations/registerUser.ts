import bcrypt from 'bcrypt';
import nullthrows from 'nullthrows';
import jwt from 'jsonwebtoken';

import { Context } from '../context';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { RegisterUserPayload } from '../payloads/RegisterUserPayload';
import { User } from '../../server/GraphQLSchema';

const { JWT_SECRET } = process.env;

export const RegisterUserInput = new GraphQLInputObjectType({
  name: "RegisterUserInput",
  fields: () => ({
    username: { type: GraphQLString },
    token: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  })
})

export const registerUser = {
  type: User,
  args: {
    input: {
      type: new GraphQLNonNull(RegisterUserInput),
    }
  },
  async resolve(root, args, ctx){
    const { username, token, password, firstName, lastName } = args.input
    const { email, role } = jwt.verify(
            token,
            nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
          ) as { email?: string; role: "Admin" | "Guardian" | "Student" | "Instructor"  };
          try {
            switch (role) {
              case 'Instructor':
                const { user, ...instructor } = nullthrows(
                  await (ctx as Context).prisma.instructor.create({
                    data: {
                      user: {
                        create: {
                          username,
                          password: await bcrypt.hash(password, 10),
                          firstName,
                          lastName,
                        },
                      },
                      email: nullthrows(email, 'email is null or undefined'),
                    },
                    include: { user: true },
                  }),
                  'Could not create instructor',
                );
                return { ...user, ...instructor };
              default:
                throw new Error('Unimplemented');
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn(e);
            throw e;
          }
  }
}
// // This seems to be un-used not sure why
// export const RegisterUserInput = inputObjectType({
//   name: 'RegisterUserInput',
//   definition(t) {
//     t.string('username', {
//       required: true,
//     });
//     t.string('token', {
//       required: true,
//     });
//     t.string('password', {
//       required: true,
//     });
//     t.string('firstName', {
//       required: true,
//     });
//     t.string('lastName', {
//       required: true,
//     });
//   },
// });

// export const registerUser = mutationField('registerUser', {
//   type: 'User',
//   args: {
//     input: arg({ type: 'RegisterUserInput', required: true }),
//   },
//   async resolve(
//     _root,
//     { input: { username, password, token, firstName, lastName } },
//     ctx,
//   ) {
//     const { email, role } = jwt.verify(
//       token,
//       nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
//     ) as { email?: string; role: NexusGen['abstractResolveReturn']['User'] };
//     try {
//       switch (role) {
//         case 'Instructor':
//           const { user, ...instructor } = nullthrows(
//             await (ctx as Context).prisma.instructor.create({
//               data: {
//                 user: {
//                   create: {
//                     username,
//                     password: await bcrypt.hash(password, 10),
//                     firstName,
//                     lastName,
//                   },
//                 },
//                 email: nullthrows(email, 'email is null or undefined'),
//               },
//               include: { user: true },
//             }),
//             'Could not create instructor',
//           );
//           return { ...user, ...instructor };
//         default:
//           throw new Error('Unimplemented');
//       }
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.warn(e);
//       throw e;
//     }
//   },
// });
