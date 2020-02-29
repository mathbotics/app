import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';
import * as path from 'path';

import types from '../../src/app/graphql';

console.log('Generating GraphQL artifacts...');
try {
  makeSchema({
    types,
    shouldGenerateArtifacts: true,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: path.join(__dirname, '../../../schema.graphql'),
      typegen: path.join(
        __dirname,
        '../../src/app/graphql/__generated__/schema.graphql.d.ts',
      ),
    },
    typegenAutoConfig: {
      sources: [],
      backingTypeMap: {
        URL: 'string',
        JWT: '{ id: ID }',
        EmailAddress: 'string',
        DateTime: 'Date',
        PostalCode: 'string',
        SensitiveString: 'string',
      },
    },
  });
} catch (e) {
  console.warn(e);
  process.exit(1);
}
