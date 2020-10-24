import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';
import express, { Request, Response } from 'express';
import * as path from 'path';

import { Context } from '../graphql/context';
import applyExpressMiddlewares from './middlewares/express';
import applySchemaMiddlewares from './middlewares/graphql';
import prisma from '../data/prisma';
import types from '../graphql';

const { PORT, NODE_ENV } = process.env;

type ExpressIntegrationContext = {
  req: Request;
  res: Response;
};

const app = express();

// Allow Cross Origin | Also to enable share with vscode
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});


const apollo = new ApolloServer({
  context({ req, res }: ExpressIntegrationContext) {
    return {
      viewer: req?.user,
      res,
      prisma,
    } as Context;
  },
  formatError(err: GraphQLError) {
    // eslint-disable-next-line no-console
    console.warn(err);
    throw err;
  },
  schema: applySchemaMiddlewares(
    makeSchema({
      plugins: [nexusPrismaPlugin()],
      shouldGenerateArtifacts: NODE_ENV !== 'production',
      outputs: {
        schema: path.join(__dirname, '../../../schema.graphql'),
        typegen: path.join(
          __dirname,
          '../graphql/__generated__/schema.graphql.d.ts',
        ),
      },
      types,
    }),
  ),
});

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../../../frontend/src')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../../../frontend/src/index.tsx'));
  })
}

applyExpressMiddlewares(app);
apollo.applyMiddleware({
  app,
  cors: { credentials: true, origin: 'http://localhost:3000' },
});

const onServerStart = () =>
  console.log(
    `🤖  mathbotics/server started on http://localhost:${PORT}${apollo.graphqlPath}`,
  );

console.log(NODE_ENV);
if (NODE_ENV !== 'test') {
  console.log('listening');
  app.listen({ port: PORT || 3000 }, onServerStart);
}


// app.get('/logout', (req, res) => {
//   console.log('logging out');
//   req.logout();
// })

export default apollo;
