import GraphSchema from '../../GraphQLSchema';
import { IMiddlewareFieldMap } from 'graphql-middleware';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';
import {logIn , LoginInput} from '../../../graphql/mutations/logIn'
import { Context } from '../../../graphql/context';
import { User } from '@prisma/client';
import { GraphQLError } from 'graphql';

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
      console.log("entered authentication")
      const user = await resolve(parent, args, context, info);
      // If statement below might not be needed.  Check back later
      if(user == null)
      {
        throw new GraphQLError("User not found in authentication");
        
      }
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
      console.log("user in authentication", {user: user})
      return { user};
    },
  },
} as IMiddlewareFieldMap;
