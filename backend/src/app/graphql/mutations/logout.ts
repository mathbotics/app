import { mutationField } from 'nexus';
import { Context } from '../context';

export const logOut = mutationField('logOut', {
  type: 'Boolean',
  args: {},
  async resolve(_root, {}, context: Context) {
    context.res.clearCookie('jwt');
    return true;
  },
});
