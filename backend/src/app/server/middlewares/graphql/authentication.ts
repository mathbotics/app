import { IMiddlewareFieldMap } from 'graphql-middleware';
import jwt from 'jsonwebtoken';
import nullthrows from 'nullthrows';

import { Context } from '../../../graphql/context';

const { JWT_SECRET } = process.env;

type Mutation = NexusGen['fieldTypes']['Mutation'];
type LogInArgs = { input: NexusGen['inputTypes']['LogInInput'] };
type LogInResolver = (
  parent: Mutation,
  args: LogInArgs,
  context: Context,
  info: any,
) => Promise<NexusGen['fieldTypes']['Mutation']['logIn']>;

export default {
  Mutation: {
    async logIn(
      resolve: LogInResolver,
      parent: Mutation,
      args: LogInArgs,
      context: Context,
      info: {},
    ) {
      const { username, ...user } = await resolve(parent, args, context, info);
      context.res.cookie(
        'jwt',
        jwt.sign({ username: nullthrows(username) }, nullthrows(JWT_SECRET)),
        {
          httpOnly: true,
        },
      );
      return { username, ...user };
    },
  },
} as IMiddlewareFieldMap;
