import { IMiddlewareFieldMap } from 'graphql-middleware';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';

import { Context } from '../../../graphql/context';

const { JWT_SECRET, NODE_ENV } = process.env;

type Mutation = NexusGen['fieldTypes']['Mutation'];
type LogInArgs = { input: NexusGen['inputTypes']['LogInInput'] };
type LogInResolver = (
  parent: Mutation,
  args: LogInArgs,
  context: Context,
  info: any,
) => Promise<NexusGen['fieldTypes']['User']>;

export default {
  Mutation: {
    async logIn(
      resolve: LogInResolver,
      parent: Mutation,
      args: LogInArgs,
      context: Context,
      info: {},
    ) {
      const { id, ...user } = await resolve(parent, args, context, info);
      const token = jwt.sign(
        {
          id: nullthrows(id, 'id cannot be null or undefined.'),
        },
        nullthrows(JWT_SECRET, 'JWT_SECRET cannot be null or undefined.'),
      );
      if (NODE_ENV !== 'test') {
        context.res.cookie('jwt', token, {
          httpOnly: true,
        });
      }
      return { id, ...user };
    },
  },
} as IMiddlewareFieldMap;
