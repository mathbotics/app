import { applyMiddleware } from 'graphql-middleware';
import { NexusGraphQLSchema } from 'nexus/dist/core';

import authentication from './authentication';
import permissions from './permissions';

export default (schema: NexusGraphQLSchema) =>
  applyMiddleware(schema, authentication, permissions);
