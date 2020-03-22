import { queryField } from 'nexus';

export const viewerQuery = queryField('viewer', {
  type: 'User',
  resolve(_parent, _args, { viewer }: any) {
    return viewer;
  },
});
