import GraphSchema from '../../GraphQLSchema';
import { IMiddlewareFieldMap } from 'graphql-middleware';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';
import {logIn , LoginInput} from '../../../graphql/mutations/logIn'
import { Context } from '../../../graphql/context';
import { User } from '@prisma/client';

const { JWT_SECRET, NODE_ENV } = process.env;

type Mutation = typeof logIn;
type LogInArgs = { input: typeof LoginInput};
type LogInResolver = (
  parent: Mutation,
  args: LogInArgs,
  context: Context,
  info: any,
) => User;

export default {
  Mutation: {
    async logIn(
      resolve: LogInResolver,
      parent: Mutation,
      args: LogInArgs,
      context: Context,
      info: {},
    ) {
      console.log("entered")
      const user = await resolve(parent, args, context, info);
      const token = jwt.sign(
        {
          id: nullthrows(user.id, 'id cannot be null or undefined.'),
        },
        nullthrows(JWT_SECRET, 'JWT_SECRET cannot be null or undefined.'),
      );
      if (NODE_ENV !== 'test') {
        context.res.cookie('jwt', token, {
          httpOnly: true,
        });
      }
      console.log(token)
      console.log("ussserr", {user: user})
      return { user: user};
    },
  },
} as IMiddlewareFieldMap;
