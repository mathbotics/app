import { applyMiddleware } from 'graphql-middleware';
import { NexusGraphQLSchema } from 'nexus/dist/core';

import authentication from './authentication';

export default (schema: NexusGraphQLSchema) =>
  applyMiddleware(schema, authentication);
