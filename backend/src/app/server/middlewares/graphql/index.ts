import { applyMiddleware } from 'graphql-middleware';
//import { NexusGraphQLSchema } from 'nexus/dist/core';
import GraphSchema from '../../GraphQLSchema';  // Added to mimic const GraphSchema = require('./src/models/GraphQLSchema');

import authentication from './authentication';

export default (schema: GraphSchema) =>
  applyMiddleware(schema, authentication);
